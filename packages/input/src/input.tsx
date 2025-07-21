
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({  ...props }: InputProps) {
  return <input className={'text-white bg-purple-400 rounded-md border-2 border-purple-100 p-2 w-2xs'} />
}