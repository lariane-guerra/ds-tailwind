
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({  ...props }: InputProps) {
  return <input className={'text-white bg-blue-300 rounded-md border-2 border-purple-100 p-2 w-2xs focus:outline-none focus:ring-1 focus:ring-blue-500'} {...props} />
}