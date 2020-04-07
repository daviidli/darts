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
import { stateType, playerType } from '../../reducers/types';
import {
	addPlayer as addPlayerAction,
	removePlayer as removePlayerAction,
	changePlayer as changePlayerAction
} from '../../actions/gameActions';

type Props = {
	players: playerType[];
	addPlayer: (player: string) => {};
	removePlayer: (index: number) => {};
	changePlayer: (players: string, index: number) => {};
};

const Players = (props: Props) => {
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
				Add player
			</Button>
		</>
	);
};

const mapStateToProps = (state: stateType) => ({ players: state.players });
const mapDispatchToProps = {
	addPlayer: addPlayerAction,
	removePlayer: removePlayerAction,
	changePlayer: changePlayerAction
};

export default connect<any, any, any, stateType>(
	mapStateToProps,
	mapDispatchToProps
)(Players);
