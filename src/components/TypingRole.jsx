import useTypewriter from "../hooks/useTypewriter";

export default function TypingRole({ roles }) {
  const text = useTypewriter(roles);

  return <p className="hero-typed-role"><span className="sr-only">{roles.join(", ")}</span><span aria-hidden="true">{text}<i /></span></p>;
}
