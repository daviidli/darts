import React from 'react';
import {
	List,
	ListItem,
	TextField,
	ListItemSecondaryAction,
	IconButton,
	Button
} from '@material-ui/core';
import { connect } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { stateType } from '../../reducers/types';
import {
	addPlayer as addPlayerAction,
	removePlayer as removePlayerAction,
	setPlayer as setPlayerAction
} from '../../actions/gameActions';

type Props = {
	players: string[];
	addPlayer: (player: string) => {};
	removePlayer: (player: string) => {};
	setPlayer: (players: string[]) => {};
};

const Players = (props: Props) => {
	const { players, addPlayer, removePlayer, setPlayer } = props;
	return (
		<List>
			{players.map((player, i) => (
				// eslint-disable-next-line react/no-array-index-key
				<ListItem key={`player-${i}`}>
					<TextField
						label={`Player ${i + 1}`}
						value={player}
						onChange={e => setPlayer(e.target.value, i)}
					/>
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							onClick={() => removePlayer(player)}
						>
							<MdDelete />
						</IconButton>
					</ListItemSecondaryAction>
				</ListItem>
			))}
			<Button
				variant="contained"
				onClick={() => addPlayer(`player ${players.length + 1}`)}
			>
				Add player
			</Button>
		</List>
	);
};

const mapStateToProps = (state: stateType) => ({ players: state.players });
const mapDispatchToProps = {
	addPlayer: addPlayerAction,
	removePlayer: removePlayerAction,
	setPlayer: setPlayerAction
};

export default connect<any, any, any, stateType>(
	mapStateToProps,
	mapDispatchToProps
)(Players);
