import React from 'react';
import {shallow} from 'enzyme';

import OnlinePlayers, {
  OnlinePlayer
} from '../../src/components/OnlinePlayers';

describe('OnlinePlayers', () => {
  it('renders no online player when no players', () => {
    expect(shallow(<OnlinePlayers players={[]} />)).not.to.have.descendants(OnlinePlayer);
  });

  it('renders self when id matches selfId', () => {
    const player = {id: 'player-id', name: 'player'};
    const selfId = player.id;
    expect(shallow(<OnlinePlayers players={[player]} selfId={selfId} />)).
      to.contain(<OnlinePlayer id='player-id' name='player' isSelf={true} />);
  });

  it('renders other player when id does not match selfId', () => {
    const player = {id: 'player-id', name: 'player'};
    const selfId = 'self-id';
    expect(shallow(<OnlinePlayers players={[player]} selfId={selfId} />)).
      to.contain(<OnlinePlayer id='player-id' name='player' isSelf={false} />);
  });
});
