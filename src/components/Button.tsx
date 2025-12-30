type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <button className="btn" onClick={onClick}>{children}</button>
  )
}
