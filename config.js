var dev = './dev', // 开发目录
    dest = './build'; // 生产目录

module.exports = {
    sass: {
        all: dev + '/sass/**/*.scss', //所有scss
        src: dev + '/sass/*.scss', //需要编译的scss
        dest: dest + '/css', //输出到生产目录
        settings: { //编译scss过程需要的配置，可为空
            outputStyle: 'compressed', //'compact'
            linefeed: 'cr'
        }
    },
    styleimg: {
        all: dev + '/sass/img', 
        dest: dest + '/css/img',
        setting: {}
    },
    copy: {
        all: [ dev + '/*', dev + '/**'],
        dest: '',
        settings {
            prefix: 1
        }
    },
    js: {
        all: dev + '/js/**/*.js',
        src: dev + '/js/*.js',
        dest: dest + '/js',
        settings: {}
    }
}