import { } from './projectsCard.css';
import Cookie from '../../../services/cookies';
import { ProjectsApi } from '../../../services/projectsApi';
import { useEffect, useState } from 'react';
import { IProjectInfo } from '../../../Models/projects.model';


export default function ProjectsCard() {
    const { getAll } = ProjectsApi();

    const [projects, setProjects] = useState<IProjectInfo[]>([]);
    const [percentageIsMadeDeadLine, setPercentageIsMadeDeadLine] = useState(0);
    const [avgScore, setAvgScore] = useState(0);

    useEffect(() => {
        getAll(Cookie.get('token')).then((data: IProjectInfo[]) => {
            setProjects(data);
            const madeDeadLine = data.filter((x) => x.madeDadeline);
            setPercentageIsMadeDeadLine(madeDeadLine.length / data.length * 100);
            const scores = data.reduce((x, current) => x + current.score, 0);
            setAvgScore(scores / data.length);

        });
    }, []);




    return (<>
        <div className="card-container">
            <div className="card">

                <div className="table-container">
                    <h1>Projects Table:</h1>
                    <div className='calc'>Average score: {avgScore}</div>
                    <div className='calc'>Projects made deadline (avg): {percentageIsMadeDeadLine.toFixed(1)}% </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Bugs Count</th>
                                <th>Duration (days)</th>
                                <th>Made Deadline</th>
                                <th>Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            {projects.map((proj) => (
                                <tr key={proj.id}>
                                    <td >{proj.name}</td>
                                    <td>{proj.bugsCount}</td>
                                    <td>{proj.durationInDays}</td>
                                    <td>{proj.madeDadeline ? 'Yes' : 'No'}</td>
                                    <td className={proj.score < 70 ? 'red' : proj.score > 90 ? 'green' : ""}>
                                        {proj.score}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>


    </>)
}