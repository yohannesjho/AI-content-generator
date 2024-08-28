import  type {NextApiRequest, NextApiResponse} from 'next'
import { fetchHistory } from '@/app/dashboard/history/page'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const data = await fetchHistory();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch history data' });
    }
}