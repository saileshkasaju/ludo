
let path = [];
for(let j = 0; j < 4; j++) {
    for (let i = 0; i < 12; i++) {
        let step = null;
        step = Object.assign({}, {
            id: i + (j * 12),
            space: null
        });
        if (i === 8 || i === 0) {
            step = Object.assign({}, step, {
                safe: true, // redundant
                stack: []
            });
            if (i === 0) {
                step = Object.assign({}, step, {
                    home: j
                });
            }
        }
        path.push(step);
    }
}

export default path;