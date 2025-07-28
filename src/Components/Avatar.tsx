type ThemedAvatarProps = {
  name: string;
  isOnline?: boolean;
};

export default function ThemedAvatar({ name, isOnline = false }: ThemedAvatarProps) {
  const getInitials = (name: string) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  return (
    <div className="relative">
      <div
        style={{ backgroundColor: "#C18D21" }}
        className="text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-[14px] manrope-600"
      >
        {getInitials(name)}
      </div>
      {isOnline && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
      )}
    </div>
  );
}
