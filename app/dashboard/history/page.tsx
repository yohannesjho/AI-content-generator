// app/history/page.tsx
import { db } from '@/utils/db';
import { AiOutput } from '@/utils/schema';
import HistoryTable from './_components/HistoryTable';  // Client component
import TableRow from './_components/HistoryTable';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Function to fetch history data from the database
const fetchHistory = async () => {
    try {
        const data = await db
            .select()
            .from(AiOutput)
            .orderBy(AiOutput.createdAt);
        return data;
    } catch (error) {
        console.error('Error fetching history data:', error);
        return [];
    }
};

// The HistoryPage component
const HistoryPage = async () => {
    const historyData = await fetchHistory();

    return (
        <div className='m-6 '>
            <div className='flex justify-between'>
            <Link href='/dashboard'>
            <Button>Back</Button>
            </Link>
             
            <h1 className='mb-4 font-bold text-xl'>Your previous contents</h1>
            </div>
            {historyData.length > 0 ? (
                <table >
                <thead>
                    <tr>
                        <th>Form Data</th>
                        <th>AI Response</th>
                        <th>Template Slug</th>
                        <th>Created By</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody className='text-[16px]'>
                    {historyData.map((entry) => (
                        <TableRow key={entry.id} entry={entry} />
                    ))}
                </tbody>
            </table>
            ) : (
                <p>No history data available.</p>
            )}
        </div>
    );
};

export default HistoryPage;
