import React from 'react';
import {
	List,
	ListItem,
	TextField,
	ListItemSecondaryAction,
	IconButton,
	Button
} from '@material-ui/core';
import { MdDelete } from 'react-icons/md';
import { playerType } from '../../reducers/types';

export type Props = {
	players: playerType[];
	addPlayer: (player: string) => {};
	removePlayer: (index: number) => {};
	changePlayer: (players: string, index: number) => {};
};

const PlayersComponent = (props: Props) => {
	const { players, addPlayer, removePlayer, changePlayer } = props;
	return (
		<>
			<List>
				{players.map((player, i) => (
					<ListItem key={`player-${player.id}`}>
						<TextField
							label={`Player ${i + 1}`}
							value={player.name}
							onChange={e => changePlayer(e.target.value, i)}
							color="secondary"
						/>
						<ListItemSecondaryAction>
							<IconButton
								edge="end"
								onClick={() => removePlayer(i)}
							>
								<MdDelete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => addPlayer(`player ${players.length + 1}`)}
			>
				Add Player
			</Button>
		</>
	);
};

export default PlayersComponent;
