import {
    publish
} from 'gh-pages';




publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        remote: 'origin',
        repo: 'https://github.com/el3um4s/docrypt.git', // Update to point to your repository
        user: {
            name: 'Samuele de Tomasi', // update to use your name
            email: 'samuele@stranianelli.com' // Update to use your email
        },
        dotfiles: true
    },
    (err) => {
        try {
            console.log(err || 'Deploy Complete!');
        } catch (e) {
            console.error(e.stack);
            process.exit(1);
        }
    }
);