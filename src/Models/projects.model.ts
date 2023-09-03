export type IProjectInfo = {
    id: string;
    name: string;
    score: number;
    durationInDays: number;
    bugsCount: number;
    madeDadeline: boolean;
}

// export default class IProjectInfo {
//     constructor(
//         public id: string="",
//         public name: string="",
//         public score: number=0,
//         public durationInDays: number=0,
//         public bugsCount: number=0,
//         public madeDadeline: boolean=false
//     ) { }
// }