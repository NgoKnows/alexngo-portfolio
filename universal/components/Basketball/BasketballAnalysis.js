import React, { Component, PropTypes } from 'react';
import bbm from 'client/files/bbm.json';
import espn from 'client/files/espn.json';
import yahoo from 'client/files/yahoo.json';

const players = {};
const playerList = [];
for (const player of bbm) {
    players[player.Name] = player.Rank;
    playerList.push({ name: player.Name, bbm: player.Rank });
}

for (const player of espn) {
    const name = player['PLAYER, TEAM POS'].split(',')[0].trim();

    if (players[name]) {
        playerList[players[name] -1] = { ...playerList[players[name] -1], espn: player.RNK };
    }
}

export default class BasketballAnalysis extends Component {
    render() {
        return (
            <div>
                {playerList.map(({ name, bbm, espn }) => {
                    return (
                        <div style={STYLES.list}>
                            <div style={STYLES.}>{name}</div>
                            <div>{bbm}</div>
                            <div>{espn}</div>
                            <div>{bbm - espn}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

const STYLES = {
    list: {
        display: 'flex',
        width: 300,
    }
}
