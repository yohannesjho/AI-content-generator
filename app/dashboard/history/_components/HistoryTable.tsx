// app/history/HistoryTable.tsx
'use client'; // Mark this component as a client component
import { useState } from 'react';

type HistoryItem = {
    id: number;
    formData: string;
    aiResponse: string;
    templateSlug: string;
    createdBy: string;
    createdAt: string;
};

type HistoryTableProps = {
    historyData: HistoryItem[];
};

const TableRow = ({ entry }: { entry: HistoryItem }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const bulletPoints = entry.aiResponse?.split('**') || [];

    return (
        <tr>
            <td>{entry.formData}</td>
            <td>
                <div className="relative">
                    <ul className={`${isExpanded?'block':'overflow-hidden text-ellipsis line-clamp-4'}`}>
                    {bulletPoints.map((point, index) => (
                            <li key={index}>#{point}</li>
                        ))}
                    </ul>
                    <button onClick={handleToggle} className="bg-red-400 text-slate-800 py-2 px-4 rounded-md curosr-pointer text-sm my-2">
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </td>
            <td>{entry.templateSlug}</td>
            <td>{entry.createdBy}</td>
            <td>{entry.createdAt ? new Date(entry.createdAt).toLocaleString() : 'N/A'}</td>
        </tr>
    );
};
export default TableRow;