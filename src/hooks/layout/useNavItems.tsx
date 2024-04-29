const useNavItems = (): { name: string; to: string }[] => {
  const navItems = [
    { name: "Feed", to: "feed" },
    { name: "Search", to: "Search" },
  ];

  return navItems;
};

export { useNavItems };
