interface ChipProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Chip({ ...props }: ChipProps) {
  return <span className="bg-amber-400 text-white p-2 rounded-md h-3.5" {...props}>Chip</span>
}