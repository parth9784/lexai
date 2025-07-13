import {
    MessageCircle,
    Settings,
    LayoutDashboard,
    History,
    PanelRight,
    Scale
} from 'lucide-react';


export default function Sidebar({
    collapsed,
    toggleSidebar,
}: {
    collapsed: boolean;
    toggleSidebar: () => void;
}) {
    const navItems = [
        { label: 'Dashboard', icon: LayoutDashboard },
        { label: 'Chat', icon: MessageCircle },
        { label: 'History', icon: History },
        { label: 'Settings', icon: Settings },
    ];

    return (
        <aside
            className={`h-screen bg-[#0C1F34] text-white transition-all duration-300 flex flex-col justify-between shadow-lg ${collapsed ? 'w-20' : 'w-64'
                }`}
        >
            {/* Header */}
            <div className="p-4">
                <div
                    className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'
                        } mb-8`}
                >
                    {!collapsed && (
                        <h1 className="text-2xl font-bold text-[#C18D21] flex gap-2 items-center">
                            <Scale size={27} />
                            LexAi</h1>
                    )}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-lg hover:bg-[#113052] transition-all"
                        title="Toggle Sidebar"
                    >
                        <PanelRight size={22} className="text-[#C18D21]" />
                    </button>
                </div>




                {/* Navigation */}
                <ul className="space-y-2">
                    {navItems.map(({ label, icon: Icon }) => (
                        <li
                            key={label}
                            className={`group relative flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#113052] transition-all ${collapsed ? 'justify-center' : ''
                                }`}
                        >
                            <Icon
                                size={22}
                                className="text-[#CFCED0] group-hover:text-[#C18D21] transition-all"
                            />
                            {!collapsed && (
                                <span className="text-sm font-medium text-[#CFCED0] group-hover:text-[#C18D21]">
                                    {label}
                                </span>
                            )}
                            {/* Tooltip for collapsed */}
                            {collapsed && (
                                <span className="absolute left-full ml-3 bg-[#1b2d45] text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                    {label}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            {!collapsed && (
                <div className="text-xs text-[#B3B3B3] text-center px-4 py-2 border-t border-[#102945]">
                    © 2025 LexAi
                </div>
            )}
        </aside>
    );
}
