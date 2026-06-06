import { useEffect, useState } from 'react';
import type { Bowler } from './types/Bowler';

interface BowlersTableProps {
  displayTeams: string[];
}

function BowlersTable(props: BowlersTableProps) {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // Fetch data from the .NET API (adjust port if needed)
  useEffect(() => {
    const fetchBowlerData = async () => {
      try {
        const rsp = await fetch('/api/BowlingLeague');
        if (!rsp.ok) {
          throw new Error('Failed to fetch data');
        }
        const b = await rsp.json();
        setBowlerData(b ?? []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setBowlerData([]);
      }
    };

    fetchBowlerData();
  }, []);

  const filteredTeamNames = props.displayTeams;
  let filteredBowlers = bowlerData.filter((b) =>
    filteredTeamNames?.includes(b.team.teamName),
  );

  // Show all if no filter supplied
  if (!filteredTeamNames || filteredTeamNames.length === 0) {
    filteredBowlers = bowlerData;
  }

  return (
    <div>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Names</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {filteredBowlers.map((b) => (
              <tr key={b.bowlerId}>
                <td>{b.bowlerLastName}</td>
                <td>
                  {b.bowlerFirstName}{' '}
                  {b.bowlerMiddleInit ? b.bowlerMiddleInit + '.' : ''}
                </td>
                <td>
                  {b.bowlerAddress}, {b.bowlerCity}, {b.bowlerState}{' '}
                  {b.bowlerZip}
                </td>
                <td>{b.bowlerPhoneNumber}</td>
                <td>{b.team?.teamName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BowlersTable;
