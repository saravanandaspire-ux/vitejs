import { useState } from 'react';
import UseRefDemo from './component/useRefDemo';
import UseContestDemo from './component/useContestDemo/index';
import UseEffectDemo from './component/useEffectDemo';
import UseMemoDemo from './component/useMemoDemo';
import UseCallbackDemo from './component/useCallbackDemo';

export default function Tabs() {
  const tabs = [
    {
      id: 'useRef',
      name: 'useRef',
      badge: 'DOM / State',
      content: <UseRefDemo />,
    },
    {
      id: 'useContext',
      name: 'useContext',
      badge: 'Global',
      content: <UseContestDemo />,
    },
    {
      id: 'useEffect',
      name: 'useEffect',
      badge: 'Side Effects',
      content: <UseEffectDemo />,
    },
    {
      id: 'useMemo',
      name: 'useMemo',
      badge: 'Performance',
      content: <UseMemoDemo />,
    },
    {
      id: 'useCallback',
      name: 'useCallback',
      badge: 'Performance',
      content: <UseCallbackDemo />,
    },
  ];

  const [activeTab, setActiveTab] = useState('useRef');

  const selectedTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            React Hooks Playground
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Interactive demonstrations and code snippets for essential React
            hooks.
          </p>
        </div>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none bg-gray-100 dark:bg-gray-900/60 p-1.5 rounded-2xl border border-gray-200/80 dark:border-gray-800">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md shadow-gray-200/50 dark:shadow-none'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-gray-800/50'
              }`}
            >
              <span>{tab.name}</span>
              <span
                className={`text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                }`}
              >
                {tab.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 min-h-[350px] transition-all">
        <div className="animate-fadeIn">{selectedTab?.content}</div>
      </div>
    </div>
  );
}
