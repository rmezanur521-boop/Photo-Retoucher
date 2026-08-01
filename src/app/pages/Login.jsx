import AuthLayout from "@/shared/auth-layout/AuthLayout";
import LoginForm from "@/features/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      formContent={<LoginForm />}
      illustrationContent={
        <img
          src="/assets/images/auth-illustration.jpg"
          alt="Photo editing workflow"
        />
      }
    />
  );
};

export default Login;