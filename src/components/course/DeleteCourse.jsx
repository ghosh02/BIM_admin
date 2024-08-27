import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"
import { Trash2 } from "lucide-react"

export function DeleteCourse() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost">
                    <Trash2 className="h-4 w-4" />
                    <span>&nbsp; Delete</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white !rounded-[10px]">
                <DialogHeader>
                    <DialogTitle>Delete Course</DialogTitle>
                    <DialogDescription>
                        Are you sure to delete this course?
                    </DialogDescription>
                </DialogHeader>

                <DialogClose asChild>
                    <DialogFooter>
                        <Button type="submit" className="bg-black text-white rounded-[10px] hover:bg-black hover:text-white hover:rounded-[10px]">Yes</Button>
                        <Button type="submit" className="bg-black text-white rounded-[10px] hover:bg-black hover:text-white hover:rounded-[10px]">No</Button>
                    </DialogFooter>
                </DialogClose>

            </DialogContent>
        </Dialog>
    )
}
