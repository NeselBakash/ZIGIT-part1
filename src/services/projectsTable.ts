// import { Column,useTable } from "react-table";
// import { IProjectInfo } from "../models/projects.model";


//  function ProjectTable(){

//     const columns: Column<IProjectInfo>[] = [
//         {
//             Header: "Id",
//             accessor: "id"
//         },
//         {
//             Header: "Project Name",
//             accessor: "name"
//         },
//         {
//             Header: "Score",
//             accessor: "score"
//         },
//         {
//             Header: "Duration (days)",
//             accessor: "durationInDays"
//         },
//         {
//             Header: "Bugs Count",
//             accessor: "bugsCount"
//         },
//         {
//             Header: "Made the Deadline?",
//             accessor: "madeDadeline"
//         }

//     ];

//     function setDatatoTable(data: IProjectInfo[]) {

//         const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<IProjectInfo>({ columns, data });
//         return { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow };
//     }
//     return {setDatatoTable};
// }