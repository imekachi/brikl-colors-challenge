import clsx from 'clsx'
import { ReactNode } from 'react'

export type MessageBoxProps = {
  children: ReactNode
  severity?: 'info' | 'error'
  className?: string
  'data-testid'?: string
}

const severityClasses = {
  info: 'bg-blue-400 text-gray-300',
  error: 'bg-red-400 text-gray-300',
}

const MessageBox = ({
  severity = 'info',
  className,
  children,
  'data-testid': testId = 'MessageBox',
}: MessageBoxProps): JSX.Element => {
  return (
    <div
      className={clsx(
        'rounded-lg p-6 bg-opacity-20',
        className,
        severityClasses[severity]
      )}
      data-testid={testId}
    >
      {children}
    </div>
  )
}

export default MessageBox
