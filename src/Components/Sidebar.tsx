// import {
//     MessageCircle,
//     Settings,
//     LayoutDashboard,
//     History,
//     PanelRight,
//     Scale
// } from 'lucide-react';


// export default function Sidebar({
//     collapsed,
//     toggleSidebar,
// }: {
//     collapsed: boolean;
//     toggleSidebar: () => void;
// }) {
//     const navItems = [
//         { label: 'Dashboard', icon: LayoutDashboard },
//         { label: 'Chat', icon: MessageCircle },
//         { label: 'History', icon: History },
//         { label: 'Settings', icon: Settings },
//     ];

//     return (
//         <aside
//             className={`h-screen bg-[#0C1F34] text-white transition-all duration-300 flex flex-col justify-between shadow-lg ${collapsed ? 'w-20' : 'w-64'
//                 }`}
//         >
//             {/* Header */}
//             <div className="p-4">
//                 <div
//                     className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between'
//                         } mb-8`}
//                 >
//                     {!collapsed && (
//                         <h1 className="text-2xl font-bold text-[#C18D21] flex gap-2 items-center">
//                             <Scale size={27} />
//                             LexAi</h1>
//                     )}
//                     <button
//                         onClick={toggleSidebar}
//                         className="p-2 rounded-lg hover:bg-[#113052] transition-all"
//                         title="Toggle Sidebar"
//                     >
//                         <PanelRight size={22} className="text-[#C18D21]" />
//                     </button>
//                 </div>




//                 {/* Navigation */}
//                 <ul className="space-y-2">
//                     {navItems.map(({ label, icon: Icon }) => (
//                         <li
//                             key={label}
//                             className={`group relative flex items-center gap-4 px-3 py-2 rounded-lg cursor-pointer hover:bg-[#113052] transition-all ${collapsed ? 'justify-center' : ''
//                                 }`}
//                         >
//                             <Icon
//                                 size={22}
//                                 className="text-[#CFCED0] group-hover:text-[#C18D21] transition-all"
//                             />
//                             {!collapsed && (
//                                 <span className="text-sm font-medium text-[#CFCED0] group-hover:text-[#C18D21]">
//                                     {label}
//                                 </span>
//                             )}
//                             {/* Tooltip for collapsed */}
//                             {collapsed && (
//                                 <span className="absolute left-full ml-3 bg-[#1b2d45] text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
//                                     {label}
//                                 </span>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Footer */}
//             {!collapsed && (
//                 <div className="text-xs text-[#B3B3B3] text-center px-4 py-2 border-t border-[#102945]">
//                     © 2025 LexAi
//                 </div>
//             )}
//         </aside>
//     );
// }

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
            style={{
                height: '100vh',
                backgroundColor: 'var(--sidebar-bg)',
                color: 'var(--sidebar-text)',
                width: collapsed ? '80px' : '260px',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            }}
        >
            {/* Header */}
            <div style={{ padding: '16px' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: collapsed ? 'center' : 'space-between',
                        marginBottom: '2rem',
                    }}
                >
                    {!collapsed && (
                        <h1
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <Scale size={27} />
                            LexAi
                        </h1>
                    )}
                    <button
                        onClick={toggleSidebar}
                        style={{
                            padding: '8px',
                            borderRadius: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                        title="Toggle Sidebar"
                    >
                        <PanelRight size={22} color="var(--accent)" />
                    </button>
                </div>

                {/* Navigation */}
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {navItems.map(({ label, icon: Icon }) => (
                        <li
                            key={label}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: collapsed ? 'center' : 'flex-start',
                                gap: '16px',
                                padding: '10px 12px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'background 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--sidebar-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <Icon
                                size={22}
                                color="var(--sidebar-icon)"
                                style={{ transition: 'color 0.2s ease' }}
                            />
                            {!collapsed && (
                                <span style={{ fontSize: '14px', color: 'var(--sidebar-icon)' }}>
                                    {label}
                                </span>
                            )}
                            {collapsed && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        left: '100%',
                                        marginLeft: '12px',
                                        backgroundColor: 'var(--tooltip-bg)',
                                        padding: '4px 8px',
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        whiteSpace: 'nowrap',
                                        color: '#fff',
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        transition: 'opacity 0.2s',
                                    }}
                                    className="sidebar-tooltip"
                                >
                                    {label}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            {!collapsed && (
                <div
                    style={{
                        fontSize: '12px',
                        color: 'var(--sidebar-footer)',
                        textAlign: 'center',
                        padding: '12px',
                        borderTop: '1px solid var(--sidebar-divider)',
                    }}
                >
                    © 2025 LexAi
                </div>
            )}
        </aside>
    );
}
