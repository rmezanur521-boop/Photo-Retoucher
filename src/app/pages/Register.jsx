import AuthLayout from "@/shared/auth-layout/AuthLayout";
import RegisterForm from "@/features/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      formContent={<RegisterForm />}
      illustrationContent={
        <img
          src="/assets/images/auth-illustration-2.jpg"
          alt="Photo editing workflow"
        />
      }
    />
  );
};

export default Register;