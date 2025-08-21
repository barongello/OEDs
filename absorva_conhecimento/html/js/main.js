var GAME = {
    canInteract: true,

    scene: {
        actual: null,
        history: []
    },

    bind: function () {
        $('.scene_1 > .button.next').click(function () {
            if (!GAME.canInteract)
                return;

            GAME.endActualSceneAndShowScene(2);
        });

        $('.scene_2 > .button.back').click(function () {
            if (!GAME.canInteract)
                return;

            GAME.endActualSceneAndShowScene(1);
        });

        $('.scene_2 > .button.next').click(function () {
            if (!GAME.canInteract)
                return;

            GAME.endActualSceneAndShowScene('simulator');
        });

        $('#endSimulator').click(function () {
            if (!GAME.canInteract)
                return;

            GAME.endActualSceneAndShowScene(2);
        });
    },

    endActualSceneAndShowScene: function (scene, callback) {
        GAME.canInteract = false;

        if (GAME.scene.actual != null)
            GAME.endScene(GAME.scene.actual, function () {
                GAME.showScene(scene, function () {
                    if (callback)
                        callback();

                    GAME.canInteract = true;
                });
            });
        else
            GAME.showScene(scene, function () {
                if (callback)
                    callback();

                GAME.canInteract = true;
            });
    },

    endScene: function (scene, callback) {
        switch (scene) {
            case 'fixed':
                $('.scene_fixed.green_line').switchClass('runningPos', 'endPos', 500, function () {
                    $('.scene_fixed.green_line').removeClass('endPos').addClass('startPos');
                    $('.scene_fixed.title').switchClass('runningPos', 'endPos', 500, function () {
                        $('.scene_fixed.title').removeClass('endPos').addClass('startPos');
                        if (callback)
                            callback();
                    });
                });
                break;
            case 1:
                $('.scene_1.textbox').switchClass('runningPos', 'endPos', 500, function () {
                    $('.scene_1.textbox').removeClass('endPos').addClass('startPos').css({ zIndex: -1 });
                    if (callback)
                        callback();
                });
                break;
            case 2:
                $('.scene_2.scheme').switchClass('runningPos', 'endPos', 500, function () {
                    $('.scene_2.scheme').removeClass('endPos').addClass('startPos').css({ zIndex: -1 });
                    $('.scene_2.legend_solvent').switchClass('runningPos', 'endPos', 500, function () {
                        $('.scene_2.legend_solvent').removeClass('endPos').addClass('startPos').css({ zIndex: -1 });
                        $('.scene_2.legend_solute').switchClass('runningPos', 'endPos', 500, function () {
                            $('.scene_2.legend_solute').removeClass('endPos').addClass('startPos').css({ zIndex: -1 });
                            $('.scene_2.textbox').switchClass('runningPos', 'endPos', 500, function () {
                                $('.scene_2.textbox').removeClass('endPos').addClass('startPos').css({ zIndex: -1 });
                                if (callback)
                                    callback();
                            });
                        });
                    });
                });
                break;
            case 'simulator':
                //$('#gameStage').show();

                $('#gameCanvas').switchClass('runningPos', 'endPos', 500, function () {
                    $('#gameCanvas').removeClass('endPos').addClass('startPos');
                });

                $('#gameSimulator > .control').animate({ opacity: 0 }, 500);

                $('#endSimulator').switchClass('runningPos', 'endPos', 500, function () {
                    $('#endSimulator').removeClass('endPos').addClass('startPos');

                    $('#gameSimulator').css({ zIndex: -1 });

                    SIMULATOR.simulating = false;

                    if (callback)
                        callback();
                });
                break;
        }
    },

    showScene: function (scene, callback) {
        if (GAME.scene.actual != null)
            GAME.scene.history.push(GAME.scene.actual);

        switch (scene) {
            case 'fixed':
                $('.scene_fixed.title').switchClass('startPos', 'runningPos', 500, function () {
                    $('.scene_fixed.green_line').switchClass('startPos', 'runningPos', 500, function () {
                        if (callback)
                            callback();
                    });
                });
                break;
            case 1:
                $('.scene_1.textbox').css({ zIndex: 4 }).switchClass('startPos', 'runningPos', 500, function () {
                    GAME.scene.actual = 1;
                    if (callback)
                        callback();
                });
                break;
            case 2:
                $('.scene_2.scheme').css({ zIndex: 4 }).switchClass('startPos', 'runningPos', 500, function () {
                    $('.scene_2.legend_solvent').css({ zIndex: 4 }).switchClass('startPos', 'runningPos', 500, function () {
                        $('.scene_2.legend_solute').css({ zIndex: 4 }).switchClass('startPos', 'runningPos', 500, function () {
                            $('.scene_2.textbox').css({ zIndex: 4 }).switchClass('startPos', 'runningPos', 500, function () {
                                GAME.scene.actual = 2;
                                if (callback)
                                    callback();
                            });
                        });
                    });
                });
                break;
            case 'simulator':
                SIMULATOR.simulating = true;

                $('#gameSimulator').css({ zIndex: 4 });

                $('#gameCanvas').switchClass('startPos', 'runningPos', 500);

                $('#gameSimulator > .control').animate({ opacity: 1 }, 500);

                $('#endSimulator').switchClass('startPos', 'runningPos', 500, function () {
                    GAME.scene.actual = 'simulator';
                    if (callback)
                        callback();
                });
                break;
        }
    },

    init: function () {
        GAME.bind();
        GAME.showScene('fixed', function () {
            GAME.showScene(1);
        });
    }
};

var SIMULATOR = {
    initialized: false,
    spritesLoaded: false,
    interactable: false,
    simulating: false,

    confs: {
        water: {
            velocities: {
                x: {
                    minimum: 2,
                    multiplier: 3
                },
                y: {
                    minimum: 2,
                    multiplier: 3
                }
            },
            quantities: {
                add: 8,
                del: 8
            },
            minimum: 1,
            maximum: 5,
            initial: 3,
            weigth: 0.125
        },
        salt: {
            velocities: {
                x: {
                    minimum: 1,
                    multiplier: 2
                },
                y: {
                    minimum: 1,
                    multiplier: 2
                }
            },
            quantities: {
                add: 1,
                del: 1
            },
            minimum: 1,
            maximum: 5,
            initial: 3,
            weigth: 1
        }
    },

    side_l: {
        water: 3,
        salt: 3
    },
    side_r: {
        water: 3,
        salt: 3
    },

    sprites: {},

    loadSprites: function () {
        this.sprites.water = new jaws.Sprite({ image: 'img/sim_h2o.png' });
        this.sprites.k = new jaws.Sprite({ image: 'img/sim_k.png' });
        this.sprites.na = new jaws.Sprite({ image: 'img/sim_na.png' });
    },

    doBind: function () {
        $('#bt_l_h2o_p').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_l.water = Math.min(SIMULATOR.confs.water.maximum, SIMULATOR.side_l.water + 1);

            if (SIMULATOR.side_l.water < SIMULATOR.confs.water.maximum)
                $('#bt_l_h2o_p').removeClass('bt_disabled');
            else
                $('#bt_l_h2o_p').addClass('bt_disabled');

            if (SIMULATOR.side_l.water > SIMULATOR.confs.water.minimum)
                $('#bt_l_h2o_m').removeClass('bt_disabled');
            else
                $('#bt_l_h2o_m').addClass('bt_disabled');

            jaws.game_state.addWater('l');

            SIMULATOR.interactable = true;
        });

        $('#bt_l_h2o_m').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_l.water = Math.max(SIMULATOR.confs.water.minimum, SIMULATOR.side_l.water - 1);

            if (SIMULATOR.side_l.water > SIMULATOR.confs.water.minimum)
                $('#bt_l_h2o_m').removeClass('bt_disabled');
            else
                $('#bt_l_h2o_m').addClass('bt_disabled');

            if (SIMULATOR.side_l.water < SIMULATOR.confs.water.maximum)
                $('#bt_l_h2o_p').removeClass('bt_disabled');
            else
                $('#bt_l_h2o_p').addClass('bt_disabled');

            jaws.game_state.delWater('l');

            SIMULATOR.interactable = true;
        });

        $('#bt_l_salt_p').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_l.salt = Math.min(SIMULATOR.confs.salt.maximum, SIMULATOR.side_l.salt + 1);

            if (SIMULATOR.side_l.salt < SIMULATOR.confs.salt.maximum)
                $('#bt_l_salt_p').removeClass('bt_disabled');
            else
                $('#bt_l_salt_p').addClass('bt_disabled');

            if (SIMULATOR.side_l.salt > SIMULATOR.confs.salt.minimum)
                $('#bt_l_salt_m').removeClass('bt_disabled');
            else
                $('#bt_l_salt_m').addClass('bt_disabled');

            jaws.game_state.addSalt('l');

            SIMULATOR.interactable = true;
        });

        $('#bt_l_salt_m').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_l.salt = Math.max(SIMULATOR.confs.salt.minimum, SIMULATOR.side_l.salt - 1);

            if (SIMULATOR.side_l.salt > SIMULATOR.confs.salt.minimum)
                $('#bt_l_salt_m').removeClass('bt_disabled');
            else
                $('#bt_l_salt_m').addClass('bt_disabled');

            if (SIMULATOR.side_l.salt < SIMULATOR.confs.salt.maximum)
                $('#bt_l_salt_p').removeClass('bt_disabled');
            else
                $('#bt_l_salt_p').addClass('bt_disabled');

            jaws.game_state.delSalt('l');

            SIMULATOR.interactable = true;
        });

        $('#bt_r_h2o_p').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_r.water = Math.min(SIMULATOR.confs.water.maximum, SIMULATOR.side_r.water + 1);

            if (SIMULATOR.side_r.water < SIMULATOR.confs.water.maximum)
                $('#bt_r_h2o_p').removeClass('bt_disabled');
            else
                $('#bt_r_h2o_p').addClass('bt_disabled');

            if (SIMULATOR.side_r.water > SIMULATOR.confs.water.minimum)
                $('#bt_r_h2o_m').removeClass('bt_disabled');
            else
                $('#bt_r_h2o_m').addClass('bt_disabled');

            jaws.game_state.addWater('r');

            SIMULATOR.interactable = true;
        });

        $('#bt_r_h2o_m').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_r.water = Math.max(SIMULATOR.confs.water.minimum, SIMULATOR.side_r.water - 1);

            if (SIMULATOR.side_r.water > SIMULATOR.confs.water.minimum)
                $('#bt_r_h2o_m').removeClass('bt_disabled');
            else
                $('#bt_r_h2o_m').addClass('bt_disabled');

            if (SIMULATOR.side_r.water < SIMULATOR.confs.water.maximum)
                $('#bt_r_h2o_p').removeClass('bt_disabled');
            else
                $('#bt_r_h2o_p').addClass('bt_disabled');

            jaws.game_state.delWater('r');

            SIMULATOR.interactable = true;
        });

        $('#bt_r_salt_p').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_r.salt = Math.min(SIMULATOR.confs.salt.maximum, SIMULATOR.side_r.salt + 1);

            if (SIMULATOR.side_r.salt < SIMULATOR.confs.salt.maximum)
                $('#bt_r_salt_p').removeClass('bt_disabled');
            else
                $('#bt_r_salt_p').addClass('bt_disabled');

            if (SIMULATOR.side_r.salt > SIMULATOR.confs.salt.minimum)
                $('#bt_r_salt_m').removeClass('bt_disabled');
            else
                $('#bt_r_salt_m').addClass('bt_disabled');

            jaws.game_state.addSalt('r');

            SIMULATOR.interactable = true;
        });

        $('#bt_r_salt_m').click(function () {
            if (!SIMULATOR.interactable || $(this).hasClass('bt_disabled'))
                return;

            SIMULATOR.interactable = false;

            SIMULATOR.side_r.salt = Math.max(SIMULATOR.confs.salt.minimum, SIMULATOR.side_r.salt - 1);

            if (SIMULATOR.side_r.salt > SIMULATOR.confs.salt.minimum)
                $('#bt_r_salt_m').removeClass('bt_disabled');
            else
                $('#bt_r_salt_m').addClass('bt_disabled');

            if (SIMULATOR.side_r.salt < SIMULATOR.confs.salt.maximum)
                $('#bt_r_salt_p').removeClass('bt_disabled');
            else
                $('#bt_r_salt_p').addClass('bt_disabled');

            jaws.game_state.delSalt('r');

            SIMULATOR.interactable = true;
        });
    },

    doInit: function () {
        this.interactable = false;

        if (!this.initialized) {
            this.doBind();

            this.initialized = true;
        }
    }
}

function SimulatorState() {
    this.bg = new jaws.Sprite({ image: 'img/sim_bg.png' });

    this.walls = new jaws.SpriteList();
    this.walls.push(new jaws.Sprite({ image: 'img/sim_wall_0.png', x: 487, y: 221 }));
    this.walls.push(new jaws.Sprite({ image: 'img/sim_wall_1.png', x: 487, y: 304 }));
    this.walls.push(new jaws.Sprite({ image: 'img/sim_wall_1.png', x: 487, y: 383 }));
    this.walls.push(new jaws.Sprite({ image: 'img/sim_wall_1.png', x: 487, y: 463 }));
    this.walls.push(new jaws.Sprite({ image: 'img/sim_wall_0.png', x: 487, y: 542 }));

    this.sides = {
        l: {
            waters: new jaws.SpriteList(),
            salts: new jaws.SpriteList()
        },
        r: {
            waters: new jaws.SpriteList(),
            salts: new jaws.SpriteList()
        }
    };

    this.addWater = function (side) {
        var target = null;
        var bounds = null;

        if (side == 'l') {
            target = this.sides.l.waters;
            bounds = {
                left: 29,
                right: this.walls.sprites[0].x - SIMULATOR.sprites.water.width
            };
        }
        else if (side == 'r') {
            target = this.sides.r.waters;
            bounds = {
                left: this.walls.sprites[0].x + this.walls.sprites[0].width,
                right: 999 - SIMULATOR.sprites.water.width
            };
        }
        else
            return;

        bounds.top = 221;
        bounds.bottom = 584 - SIMULATOR.sprites.water.height;

        var confs = SIMULATOR.confs.water;
        for (var i = 0; i < confs.quantities.add; i++) {
            var sprite = new jaws.Sprite({
                image: 'img/sim_h2o.png',
                x: Math.floor(Math.random() * (bounds.right - bounds.left)) + bounds.left,
                y: Math.floor(Math.random() * (bounds.bottom - bounds.top)) + bounds.top
            });

            sprite.vx = (Math.floor(Math.random() * confs.velocities.x.multiplier) + confs.velocities.x.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);
            sprite.vy = (Math.floor(Math.random() * confs.velocities.y.multiplier) + confs.velocities.y.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);

            target.push(sprite);
        }
    };

    this.delWater = function (side) {
        var target = null;

        if (side == 'l')
            target = this.sides.l.waters;
        else if (side == 'r')
            target = this.sides.r.waters;
        else
            return;

        var confs = SIMULATOR.confs.water;
        for (var i = 0; i < confs.quantities.del; i++)
            target.pop();
    };

    this.addSalt = function (side) {
        var target = null;
        var bounds = null;

        if (side == 'l') {
            target = this.sides.l.salts;
            bounds = {
                left: 29,
                right: this.walls.sprites[0].x - SIMULATOR.sprites.k.width
            };
        }
        else if (side == 'r') {
            target = this.sides.r.salts;
            bounds = {
                left: this.walls.sprites[0].x + this.walls.sprites[0].width,
                right: 999 - SIMULATOR.sprites.k.width
            };
        }
        else
            return;

        bounds.top = 221;
        bounds.bottom = 584 - SIMULATOR.sprites.k.height;

        var confs = SIMULATOR.confs.salt;
        for (var i = 0; i < confs.quantities.add; i++) {
            var sprite = new jaws.Sprite({
                image: 'img/sim_k.png',
                x: Math.floor(Math.random() * (bounds.right - bounds.left)) + bounds.left,
                y: Math.floor(Math.random() * (bounds.bottom - bounds.top)) + bounds.top
            });

            sprite.vx = (Math.floor(Math.random() * confs.velocities.x.multiplier) + confs.velocities.x.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);
            sprite.vy = (Math.floor(Math.random() * confs.velocities.y.multiplier) + confs.velocities.y.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);

            target.push(sprite);

            sprite = new jaws.Sprite({
                image: 'img/sim_na.png',
                x: Math.floor(Math.random() * (bounds.right - bounds.left)) + bounds.left,
                y: Math.floor(Math.random() * (bounds.bottom - bounds.top)) + bounds.top
            });

            sprite.vx = (Math.floor(Math.random() * confs.velocities.x.multiplier) + confs.velocities.x.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);
            sprite.vy = (Math.floor(Math.random() * confs.velocities.y.multiplier) + confs.velocities.y.minimum) * (Math.floor(Math.random() * 2) ? -1 : 1);

            target.push(sprite);
        }
    };

    this.delSalt = function (side) {
        var target = null;

        if (side == 'l')
            target = this.sides.l.salts;
        else if (side == 'r')
            target = this.sides.r.salts;
        else
            return;

        var confs = SIMULATOR.confs.salt;
        for (var i = 0; i < confs.quantities.del; i++) {
            target.pop();
            target.pop();
        }
    };

    this.handleWaterMovement = function (sprite, index) {
        if (sprite.skip) {
            sprite.skip = false;
            return;
        }

        var bounds = {
            left: 29,
            top: 221,
            right: 999,
            bottom: 584
        };

        var middle = Math.floor(jaws.game_state.walls.sprites[0].x + jaws.game_state.walls.sprites[0].width / 2);
        var oldPos = jaws.clone(sprite.rect());
        var before = (oldPos.x <= middle ? 'l' : 'r');

        sprite.move(sprite.vx, 0);

        var collisions = jaws.collideOneWithMany(sprite, jaws.game_state.walls);
        if (collisions.length > 0) {
            var sRect = sprite.rect();
            var oRect = collisions[0].rect();

            sprite.vx *= -1;

            if (sRect.x <= oRect.right && sRect.right >= oRect.right)
                sprite.x = oRect.right + 1;
            else if (sRect.right >= oRect.x && sRect.x <= oRect.x)
                sprite.x = oRect.x - sprite.width - 1;
        }

        if (before == 'l' && sprite.rect().right > jaws.game_state.walls.sprites[0].x && jaws.game_state.sides.l.waters.length <= SIMULATOR.side_l.salt * SIMULATOR.confs.water.quantities.add) {
            sprite.vx *= -1;

            sprite.x = jaws.game_state.walls.sprites[0].x - sprite.width - 1;
        }
        else if (before == 'r' && sprite.x < jaws.game_state.walls.sprites[0].rect().right && jaws.game_state.sides.r.waters.length <= SIMULATOR.side_r.salt * SIMULATOR.confs.water.quantities.add) {
            sprite.vx *= -1;

            sprite.x = jaws.game_state.walls.sprites[0].rect().right + 1;
        }

        sprite.move(0, sprite.vy);

        var collisions = jaws.collideOneWithMany(sprite, jaws.game_state.walls);
        if (collisions.length > 0) {
            var sRect = sprite.rect();
            var oRect = collisions[0].rect();

            sprite.vy *= -1;

            if (sRect.y <= oRect.bottom && sRect.bottom >= oRect.bottom)
                sprite.y = oRect.bottom + 1;
            else if (sRect.bottom >= oRect.y && sRect.y <= oRect.y)
                sprite.y = oRect.y - sprite.height - 1;
        }

        if (sprite.x < bounds.left) {
            sprite.vx *= -1;
            sprite.x = bounds.left + 1;
        }
        else if (sprite.x > bounds.right - sprite.width) {
            sprite.vx *= -1;
            sprite.x = bounds.right - sprite.width - 1;
        }

        if (sprite.y < bounds.top) {
            sprite.vy *= -1;
            sprite.y = bounds.top + 1;
        }
        else if (sprite.y > bounds.bottom - sprite.height) {
            sprite.vy *= -1;
            sprite.y = bounds.bottom - sprite.height - 1;
        }

        var after = (sprite.x <= middle ? 'l' : 'r');

        if (before != after) {
            if (before == 'l' && after == 'r') {
                var removed = jaws.game_state.sides.l.waters.splice(index, 1);
                if (removed.length > 0) {
                    removed = removed[0];
                    removed.skip = true;
                    jaws.game_state.sides.r.waters.push(removed);
                    SIMULATOR.side_l.water -= SIMULATOR.confs.water.weigth;
                    SIMULATOR.side_r.water += SIMULATOR.confs.water.weigth;
                }
            }
            else if (before == 'r' && after == 'l') {
                var removed = jaws.game_state.sides.r.waters.splice(index, 1);
                if (removed.length > 0) {
                    removed = removed[0];
                    jaws.game_state.sides.l.waters.push(removed);
                    SIMULATOR.side_r.water -= SIMULATOR.confs.water.weigth;
                    SIMULATOR.side_l.water += SIMULATOR.confs.water.weigth;
                }
            }

            if (SIMULATOR.side_l.water % 1 == 0) {
                if (SIMULATOR.side_l.water == SIMULATOR.confs.water.minimum)
                    $('#bt_l_h2o_m').addClass('bt_disabled');
                else if (SIMULATOR.side_l.water == SIMULATOR.confs.water.maximum)
                    $('#bt_l_h2o_p').addClass('bt_disabled');
                else if (SIMULATOR.side_l.water > SIMULATOR.confs.minimum)
                    $('#bt_l_h2o_m').removeClass('bt_disabled');
                else if (SIMULATOR.side_l.water < SIMULATOR.confs.maximum)
                    $('#bt_l_h2o_p').removeClass('bt_disabled');
            }

            if (SIMULATOR.side_r.water % 1 == 0) {
                if (SIMULATOR.side_r.water == SIMULATOR.confs.water.minimum)
                    $('#bt_r_h2o_m').addClass('bt_disabled');
                else if (SIMULATOR.side_r.water == SIMULATOR.confs.water.maximum)
                    $('#bt_r_h2o_p').addClass('bt_disabled');
                else if (SIMULATOR.side_r.water > SIMULATOR.confs.minimum)
                    $('#bt_r_h2o_m').removeClass('bt_disabled');
                else if (SIMULATOR.side_r.water < SIMULATOR.confs.maximum)
                    $('#bt_r_h2o_p').removeClass('bt_disabled');
            }

            var total = jaws.game_state.sides.l.waters.length + jaws.game_state.sides.r.waters.length;
            var percentual = jaws.game_state.sides.l.waters.length / total;
            var xPosition = (970 - 300) * percentual + 150;

            jaws.game_state.walls.forEach(function (sprite, index) {
                sprite.xPosition = xPosition;
            });

        }
    };

    this.setup = function () {
        SIMULATOR.simulating = false;
        SIMULATOR.interactable = false;

        if (!SIMULATOR.spritesLoaded) {
            SIMULATOR.loadSprites();

            SIMULATOR.spritesLoaded = true;
        }

        $('#bt_l_h2o_p, #bt_l_h2o_m, #bt_l_salt_p, #bt_l_salt_m, #bt_r_h2o_p, #bt_r_h2o_m, #bt_r_salt_p, #bt_r_salt_m').removeClass('bt_disabled');
        $('#gameSimulator').show();

        SIMULATOR.side_l.water = SIMULATOR.side_r.water = SIMULATOR.confs.water.initial;
        SIMULATOR.side_l.salt = SIMULATOR.side_r.salt = SIMULATOR.confs.salt.initial;

        for (var i = 0; i < SIMULATOR.side_l.water; i++)
            this.addWater('l');

        for (var i = 0; i < SIMULATOR.side_l.salt; i++)
            this.addSalt('l');

        for (var i = 0; i < SIMULATOR.side_r.water; i++)
            this.addWater('r');

        for (var i = 0; i < SIMULATOR.side_r.salt; i++)
            this.addSalt('r');

        SIMULATOR.interactable = true;
    };

    this.update = function () {
        if (!SIMULATOR.simulating)
            return;

        SIMULATOR.interactable = false;

        var bounds = {
            l: {
                left: 29,
                top: 221,
                right: this.walls.sprites[0].x,
                bottom: 584
            },
            r: {
                left: this.walls.sprites[0].x + this.walls.sprites[0].width,
                top: 221,
                right: 999,
                bottom: 584
            }
        };

        // Move the walls
        this.walls.forEach(function (sprite, index) {
            if (!sprite.xPosition)
                return;

            if (sprite.xPosition < sprite.x)
                sprite.move(-1, 0);
            else if (sprite.xPosition > sprite.x)
                sprite.move(1, 0);
        });

        // Move the salts
        this.sides.l.salts.forEach(function (sprite, index) {
            sprite.move(sprite.vx, sprite.vy);

            if (sprite.x < bounds.l.left) {
                sprite.vx *= -1;
                sprite.x = bounds.l.left;
            }
            else if (sprite.x > bounds.l.right - sprite.width) {
                sprite.vx *= -1;
                sprite.x = bounds.l.right - sprite.width;
            }

            if (sprite.y < bounds.l.top) {
                sprite.vy *= -1;
                sprite.y = bounds.l.top;
            }
            else if (sprite.y > bounds.l.bottom - sprite.height) {
                sprite.vy *= -1;
                sprite.y = bounds.l.bottom - sprite.height;
            }
        });

        this.sides.r.salts.forEach(function (sprite, index) {
            sprite.move(sprite.vx, sprite.vy);

            if (sprite.x < bounds.r.left) {
                sprite.vx *= -1;
                sprite.x = bounds.r.left;
            }
            else if (sprite.x > bounds.r.right - sprite.width) {
                sprite.vx *= -1;
                sprite.x = bounds.r.right - sprite.width;
            }

            if (sprite.y < bounds.r.top) {
                sprite.vy *= -1;
                sprite.y = bounds.r.top;
            }
            else if (sprite.y > bounds.r.bottom - sprite.height) {
                sprite.vy *= -1;
                sprite.y = bounds.r.bottom - sprite.height;
            }
        });

        // Move the waters
        this.sides.l.waters.forEach(this.handleWaterMovement);
        this.sides.r.waters.forEach(this.handleWaterMovement);

        SIMULATOR.interactable = true;
    };

    this.draw = function () {
        jaws.clear();

        // Draw the backgrund
        this.bg.draw();

        // Draw the walls
        this.walls.forEach(function (sprite, index) {
            sprite.draw();
        });

        // Draw the waters
        this.sides.l.waters.forEach(function (sprite, index) {
            sprite.draw();
        });

        this.sides.r.waters.forEach(function (sprite, index) {
            sprite.draw();
        });

        // Draw the salts
        this.sides.l.salts.forEach(function (sprite, index) {
            sprite.draw();
        });

        this.sides.r.salts.forEach(function (sprite, index) {
            sprite.draw();
        });
    };
}

$(document).ready(function () {
    jaws.assets.add('img/sim_bg.png');
    jaws.assets.add('img/sim_wall_0.png');
    jaws.assets.add('img/sim_wall_1.png');
    jaws.assets.add('img/sim_h2o.png');
    jaws.assets.add('img/sim_k.png');
    jaws.assets.add('img/sim_na.png');
    jaws.assets.add('img/sim_bt_p.png');
    jaws.assets.add('img/sim_bt_m.png');

    GAME.init();
    SIMULATOR.doInit();

    jaws.start(SimulatorState);
});
