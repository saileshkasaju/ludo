const HOME = 'HOME';

const player = (name, color) => {
    let pieces = [];
    for (let i = 0; i < 4; i++) {
        let piece = Object.assign({}, {
            id: i,
            status: HOME
        });
        pieces.push(piece)
    }
    return Object.assign({}, {
        name,
        color,
        pieces
    })
};

export default player;