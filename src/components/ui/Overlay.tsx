interface OverlayProps {
    className?: string;
    onClick: () => void
}

const Overlay = ({className, onClick}: OverlayProps) => {
  return (
    <div className={`fixed inset-0 bg-[#0000001a] ${className}`} onClick={onClick}>
    </div>
  )
}

export default Overlay