import React, { useEffect, useState } from "react";
import { confirmSignUp, signIn } from "aws-amplify/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { validateEmail, validateRequired } from "@/utils/validation";
import { handleApiError } from "@/utils/errorHandling";

type LocationState = {
  email?: string;
  password?: string;
};

function ConfirmSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state as LocationState) || {};

  const [email, setEmail] = useState(state.email ?? "");
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState<{ email?: string; code?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (state.email) setEmail(state.email);
  }, [state.email]);

  const validate = () => {
    const newErrors: { email?: string; code?: string } = {};

    if (!validateRequired(email)) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format";

    if (!validateRequired(code)) newErrors.code = "Verification code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await confirmSignUp({
        username: email.trim(),
        confirmationCode: code.trim(),
      });

      if (state.password) {
        try {
          await signIn({ username: email.trim(), password: state.password });
          navigate("/", { replace: true });
          return;
        } catch {}
      }

      navigate("/login", { replace: true, state: { email: email.trim() } });
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 animated-bg">
      <div className="max-w-md w-full">
        <div className="glass-effect rounded-3xl shadow-2xl border border-white/20 p-8">
          <form onSubmit={handleConfirm} className="space-y-4">
            <h2 className="text-2xl font-bold">Verify Account</h2>

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              required
              placeholder="you@example.com"
            />

            <Input
              label="Confirmation Code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              error={errors.code}
              required
              placeholder="123456"
            />

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
              {isLoading ? "Verifying..." : "Verify"}
            </Button>

            <div className="text-center">
              <Link to="/login" className="text-sm text-violet-600 hover:text-violet-700 font-semibold">
                Back to login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSignup;