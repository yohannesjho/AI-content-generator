// app/api/history/route.ts
import { NextResponse } from 'next/server';
import { fetchHistory } from '@/app/dashboard/history/page';  

export async function GET() {
    try {
        const data = await fetchHistory();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error('Error fetching history data:', error);
        return NextResponse.json({ error: 'Failed to fetch history data' }, { status: 500 });
    }
}
