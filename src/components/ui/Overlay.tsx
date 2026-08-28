interface OverlayProps {
    className?: string;
    onClick: () => void
}

const Overlay = ({className, onClick}: OverlayProps) => {
  return (
    <div className={`fixed inset-0 bg-[#0000001a] supports-backdrop-filter:backdrop-blur-sm ${className}`} onClick={onClick}>
    </div>
  )
}

export default Overlay