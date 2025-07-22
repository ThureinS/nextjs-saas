import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {cn} from "@/lib/utils";

interface CompanionListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionList = ({title, companions, classNames}: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="font-bold text-3xl">Recent Sessions</h2>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </article>
    );
};

export default CompanionList;