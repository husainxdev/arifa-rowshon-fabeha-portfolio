import useTypewriter from "../hooks/useTypewriter";

export default function TypingRole({ roles }) {
  const { word, length } = useTypewriter(roles);
  const text = word.slice(0, length);

  return <p className="hero-typed-role"><span className="sr-only">{roles.join(", ")}</span><span aria-hidden="true">{text}{roles.length > 1 && <i />}</span></p>;
}
