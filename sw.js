if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const t=s=>l(s,a),u={module:{uri:a},exports:r,require:t};e[a]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.c72ab6fa.js",revision:null},{url:"assets/404.md.c72ab6fa.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4118916e.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.4118916e.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.8235b38e.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.8235b38e.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.36acaad8.js",revision:null},{url:"assets/animation-controllers_death-commands.md.36acaad8.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.b60ba4d5.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.b60ba4d5.lean.js",revision:null},{url:"assets/animation-controllers_index.md.013e4944.js",revision:null},{url:"assets/animation-controllers_index.md.013e4944.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.a6e6e22e.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.a6e6e22e.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.95f28dd8.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.95f28dd8.lean.js",revision:null},{url:"assets/app.5f9132da.js",revision:null},{url:"assets/blocks_applying-effects.md.4a1db5d6.js",revision:null},{url:"assets/blocks_applying-effects.md.4a1db5d6.lean.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.8316a99c.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.8316a99c.lean.js",revision:null},{url:"assets/blocks_block-materials.md.341fa94a.js",revision:null},{url:"assets/blocks_block-materials.md.341fa94a.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.99a1f1cf.js",revision:null},{url:"assets/blocks_block-shapes.md.99a1f1cf.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.62e11ccf.js",revision:null},{url:"assets/blocks_block-sounds.md.62e11ccf.lean.js",revision:null},{url:"assets/blocks_block-tags.md.492b7ad9.js",revision:null},{url:"assets/blocks_block-tags.md.492b7ad9.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.0235570d.js",revision:null},{url:"assets/blocks_block-texture-variation.md.0235570d.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.99c53fba.js",revision:null},{url:"assets/blocks_blocks-experimental.md.99c53fba.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.bd9eb82b.js",revision:null},{url:"assets/blocks_blocks-intro.md.bd9eb82b.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.8f969a8b.js",revision:null},{url:"assets/blocks_blocks-stable.md.8f969a8b.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.a8954899.js",revision:null},{url:"assets/blocks_custom-crops.md.a8954899.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.18951fd1.js",revision:null},{url:"assets/blocks_custom-fluids.md.18951fd1.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.add3f2d7.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.add3f2d7.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.c65a3814.js",revision:null},{url:"assets/blocks_custom-slabs.md.c65a3814.lean.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.b415d993.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.b415d993.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.764083de.js",revision:null},{url:"assets/blocks_custom-trees.md.764083de.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.c5627a4c.js",revision:null},{url:"assets/blocks_fake-blocks.md.c5627a4c.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.85c3cad1.js",revision:null},{url:"assets/blocks_flipbook-textures.md.85c3cad1.lean.js",revision:null},{url:"assets/blocks_index.md.f4f9bad7.js",revision:null},{url:"assets/blocks_index.md.f4f9bad7.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ede5c4f2.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.ede5c4f2.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c21d7257.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.c21d7257.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.8d691a32.js",revision:null},{url:"assets/blocks_precise-interaction.md.8d691a32.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.596f6ae3.js",revision:null},{url:"assets/blocks_precise-rotation.md.596f6ae3.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.e32f84fe.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.e32f84fe.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.844617cc.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.844617cc.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.dff80e55.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.e5caf9e1.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.4865e551.js",revision:null},{url:"assets/commands_block-states.md.4865e551.lean.js",revision:null},{url:"assets/commands_damage.md.d8ee15a3.js",revision:null},{url:"assets/commands_damage.md.d8ee15a3.lean.js",revision:null},{url:"assets/commands_entity-counter.md.d2f0f7d6.js",revision:null},{url:"assets/commands_entity-counter.md.d2f0f7d6.lean.js",revision:null},{url:"assets/commands_index.md.aa33bbfe.js",revision:null},{url:"assets/commands_index.md.aa33bbfe.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.13ef83cd.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.13ef83cd.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.c123c66a.js",revision:null},{url:"assets/commands_mcfunctions.md.c123c66a.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.5f91bb1d.js",revision:null},{url:"assets/commands_nbt-commands.md.5f91bb1d.lean.js",revision:null},{url:"assets/commands_new-execute.md.4a305e4b.js",revision:null},{url:"assets/commands_new-execute.md.4a305e4b.lean.js",revision:null},{url:"assets/commands_on-first-join.md.77a775ea.js",revision:null},{url:"assets/commands_on-first-join.md.77a775ea.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.5dcadc88.js",revision:null},{url:"assets/commands_on-first-world-load.md.5dcadc88.lean.js",revision:null},{url:"assets/commands_on-player-death.md.90c4db88.js",revision:null},{url:"assets/commands_on-player-death.md.90c4db88.lean.js",revision:null},{url:"assets/commands_on-player-join.md.a19a2ead.js",revision:null},{url:"assets/commands_on-player-join.md.a19a2ead.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.519f10af.js",revision:null},{url:"assets/commands_on-player-leave.md.519f10af.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.b0757025.js",revision:null},{url:"assets/commands_on-player-respawn.md.b0757025.lean.js",revision:null},{url:"assets/commands_playsound.md.26f0994b.js",revision:null},{url:"assets/commands_playsound.md.26f0994b.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.b6dc2175.js",revision:null},{url:"assets/commands_relative-coordinates.md.b6dc2175.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.38aa051e.js",revision:null},{url:"assets/commands_scoreboard-operations.md.38aa051e.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.a787d908.js",revision:null},{url:"assets/commands_scoreboard-timers.md.a787d908.lean.js",revision:null},{url:"assets/commands_selectors.md.d36e1a0c.js",revision:null},{url:"assets/commands_selectors.md.d36e1a0c.lean.js",revision:null},{url:"assets/commands_tellraw.md.290d8c65.js",revision:null},{url:"assets/commands_tellraw.md.290d8c65.lean.js",revision:null},{url:"assets/concepts_contents.md.87fa1db9.js",revision:null},{url:"assets/concepts_contents.md.87fa1db9.lean.js",revision:null},{url:"assets/concepts_emojis.md.cc7e7a19.js",revision:null},{url:"assets/concepts_emojis.md.cc7e7a19.lean.js",revision:null},{url:"assets/concepts_index.md.eaf97ca8.js",revision:null},{url:"assets/concepts_index.md.eaf97ca8.lean.js",revision:null},{url:"assets/concepts_molang.md.4e0fedfa.js",revision:null},{url:"assets/concepts_molang.md.4e0fedfa.lean.js",revision:null},{url:"assets/concepts_namespaces.md.ff9c9590.js",revision:null},{url:"assets/concepts_namespaces.md.ff9c9590.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.d5177200.js",revision:null},{url:"assets/concepts_overwriting-assets.md.d5177200.lean.js",revision:null},{url:"assets/concepts_shaders.md.c712cc97.js",revision:null},{url:"assets/concepts_shaders.md.c712cc97.lean.js",revision:null},{url:"assets/concepts_sounds.md.0bc95d4e.js",revision:null},{url:"assets/concepts_sounds.md.0bc95d4e.lean.js",revision:null},{url:"assets/concepts_subpacks.md.38eb2c89.js",revision:null},{url:"assets/concepts_subpacks.md.38eb2c89.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.243989fb.js",revision:null},{url:"assets/concepts_text-and-translations.md.243989fb.lean.js",revision:null},{url:"assets/concepts_textures-list.md.8aa3b99c.js",revision:null},{url:"assets/concepts_textures-list.md.8aa3b99c.lean.js",revision:null},{url:"assets/contribute-how-to.md.e2ac2a59.js",revision:null},{url:"assets/contribute-how-to.md.e2ac2a59.lean.js",revision:null},{url:"assets/contribute-style.md.604aeecc.js",revision:null},{url:"assets/contribute-style.md.604aeecc.lean.js",revision:null},{url:"assets/contribute.md.81fe7ae1.js",revision:null},{url:"assets/contribute.md.81fe7ae1.lean.js",revision:null},{url:"assets/discord.md.ab5b9d7a.js",revision:null},{url:"assets/discord.md.ab5b9d7a.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.6a207669.js",revision:null},{url:"assets/documentation_advanced-molang.md.6a207669.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.a5bc6bdb.js",revision:null},{url:"assets/documentation_creative-categories.md.a5bc6bdb.lean.js",revision:null},{url:"assets/documentation_file-types.md.42a0ed52.js",revision:null},{url:"assets/documentation_file-types.md.42a0ed52.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.e052caa7.js",revision:null},{url:"assets/documentation_fog-ids.md.e052caa7.lean.js",revision:null},{url:"assets/documentation_index.md.7c12571b.js",revision:null},{url:"assets/documentation_index.md.7c12571b.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.5b55e9fd.js",revision:null},{url:"assets/documentation_material-config-description.md.5b55e9fd.lean.js",revision:null},{url:"assets/documentation_materials.md.76ec4153.js",revision:null},{url:"assets/documentation_materials.md.76ec4153.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.46dc0a38.js",revision:null},{url:"assets/documentation_pack-structure.md.46dc0a38.lean.js",revision:null},{url:"assets/documentation_projectiles.md.076cb8b8.js",revision:null},{url:"assets/documentation_projectiles.md.076cb8b8.lean.js",revision:null},{url:"assets/documentation_queries.md.78fcd7a2.js",revision:null},{url:"assets/documentation_queries.md.78fcd7a2.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.0751ac40.js",revision:null},{url:"assets/documentation_shared-constructs.md.0751ac40.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.e9110c48.js",revision:null},{url:"assets/documentation_sound-definitions.md.e9110c48.lean.js",revision:null},{url:"assets/entities_boat-entities.md.c7e0da68.js",revision:null},{url:"assets/entities_boat-entities.md.c7e0da68.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e0184d3b.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e0184d3b.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.c266868c.js",revision:null},{url:"assets/entities_disabling-team-damage.md.c266868c.lean.js",revision:null},{url:"assets/entities_dummy-components.md.fdbd746c.js",revision:null},{url:"assets/entities_dummy-components.md.fdbd746c.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.c91fd544.js",revision:null},{url:"assets/entities_dummy-entities.md.c91fd544.lean.js",revision:null},{url:"assets/entities_entity-attack.md.2e31c84e.js",revision:null},{url:"assets/entities_entity-attack.md.2e31c84e.lean.js",revision:null},{url:"assets/entities_entity-events.md.d5e04c51.js",revision:null},{url:"assets/entities_entity-events.md.d5e04c51.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.297a7099.js",revision:null},{url:"assets/entities_entity-holds-item.md.297a7099.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.f7e3b58e.js",revision:null},{url:"assets/entities_entity-intro-bp.md.f7e3b58e.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.e6888928.js",revision:null},{url:"assets/entities_entity-intro-rp.md.e6888928.lean.js",revision:null},{url:"assets/entities_entity-movement.md.60fe045f.js",revision:null},{url:"assets/entities_entity-movement.md.60fe045f.lean.js",revision:null},{url:"assets/entities_entity-properties.md.d69abd00.js",revision:null},{url:"assets/entities_entity-properties.md.d69abd00.lean.js",revision:null},{url:"assets/entities_flying-entities.md.a4cc3da8.js",revision:null},{url:"assets/entities_flying-entities.md.a4cc3da8.lean.js",revision:null},{url:"assets/entities_index.md.209ac7c8.js",revision:null},{url:"assets/entities_index.md.209ac7c8.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.8f961bde.js",revision:null},{url:"assets/entities_introduction-to-aec.md.8f961bde.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.9485721f.js",revision:null},{url:"assets/entities_invulnerable-entities.md.9485721f.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.023cc420.js",revision:null},{url:"assets/entities_look-at-entity.md.023cc420.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.f605434b.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.f605434b.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.a6df4ba2.js",revision:null},{url:"assets/entities_npc-dialogs.md.a6df4ba2.lean.js",revision:null},{url:"assets/entities_render-controllers.md.d176de6a.js",revision:null},{url:"assets/entities_render-controllers.md.d176de6a.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.47a0eec3.js",revision:null},{url:"assets/entities_runtime-identifier.md.47a0eec3.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.ca08a2f1.js",revision:null},{url:"assets/entities_sleeping-entities.md.ca08a2f1.lean.js",revision:null},{url:"assets/entities_solid-entities.md.28adc229.js",revision:null},{url:"assets/entities_solid-entities.md.28adc229.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.81a4a2dc.js",revision:null},{url:"assets/entities_spawn-rules.md.81a4a2dc.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.ac3eeec8.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.ac3eeec8.lean.js",revision:null},{url:"assets/entities_timers.md.5eab9691.js",revision:null},{url:"assets/entities_timers.md.5eab9691.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.2e58eab6.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.2e58eab6.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.7fb82a46.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.7fb82a46.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.59496dd8.js",revision:null},{url:"assets/entities_village-mechanic.md.59496dd8.lean.js",revision:null},{url:"assets/entities_vuc-full.md.9ce4ca2b.lean.js",revision:null},{url:"assets/entities_vusr-full.md.8bdb6104.js",revision:null},{url:"assets/entities_vusr-full.md.8bdb6104.lean.js",revision:null},{url:"assets/graph-test.md.5de9ec22.js",revision:null},{url:"assets/graph-test.md.5de9ec22.lean.js",revision:null},{url:"assets/guide_addons.md.90d41c19.js",revision:null},{url:"assets/guide_addons.md.90d41c19.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.e242b61a.js",revision:null},{url:"assets/guide_advancedmanifest.md.e242b61a.lean.js",revision:null},{url:"assets/guide_blockbench.md.5816dfb9.js",revision:null},{url:"assets/guide_blockbench.md.5816dfb9.lean.js",revision:null},{url:"assets/guide_custom-entity.md.cb408511.js",revision:null},{url:"assets/guide_custom-entity.md.cb408511.lean.js",revision:null},{url:"assets/guide_custom-item.md.2add6dba.js",revision:null},{url:"assets/guide_custom-item.md.2add6dba.lean.js",revision:null},{url:"assets/guide_download-packs.md.ff4a49b5.js",revision:null},{url:"assets/guide_download-packs.md.ff4a49b5.lean.js",revision:null},{url:"assets/guide_format-version.md.c59d31df.js",revision:null},{url:"assets/guide_format-version.md.c59d31df.lean.js",revision:null},{url:"assets/guide_index.md.3a1b1e8a.js",revision:null},{url:"assets/guide_index.md.3a1b1e8a.lean.js",revision:null},{url:"assets/guide_introduction.md.c5c5aa47.js",revision:null},{url:"assets/guide_introduction.md.c5c5aa47.lean.js",revision:null},{url:"assets/guide_loot-table.md.6de28dc2.js",revision:null},{url:"assets/guide_loot-table.md.6de28dc2.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.2141683d.js",revision:null},{url:"assets/guide_project-setup-android.md.2141683d.lean.js",revision:null},{url:"assets/guide_project-setup.md.a72a3eb2.js",revision:null},{url:"assets/guide_project-setup.md.a72a3eb2.lean.js",revision:null},{url:"assets/guide_software-preparation.md.6ab7afe1.js",revision:null},{url:"assets/guide_software-preparation.md.6ab7afe1.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.0137bbad.js",revision:null},{url:"assets/guide_troubleshooting.md.0137bbad.lean.js",revision:null},{url:"assets/guide_understanding-json.md.f1f04476.js",revision:null},{url:"assets/guide_understanding-json.md.f1f04476.lean.js",revision:null},{url:"assets/hacktoberfest.md.d0b79908.js",revision:null},{url:"assets/hacktoberfest.md.d0b79908.lean.js",revision:null},{url:"assets/index.md.ccab751a.js",revision:null},{url:"assets/index.md.ccab751a.lean.js",revision:null},{url:"assets/items_attachables.md.42078837.js",revision:null},{url:"assets/items_attachables.md.42078837.lean.js",revision:null},{url:"assets/items_custom-armor.md.c0655021.js",revision:null},{url:"assets/items_custom-armor.md.c0655021.lean.js",revision:null},{url:"assets/items_custom-weapon.md.6c8c3ebc.js",revision:null},{url:"assets/items_custom-weapon.md.6c8c3ebc.lean.js",revision:null},{url:"assets/items_enchantments.md.6f3f693f.js",revision:null},{url:"assets/items_enchantments.md.6f3f693f.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.7a8a49d4.js",revision:null},{url:"assets/items_equipped-item-commands.md.7a8a49d4.lean.js",revision:null},{url:"assets/items_index.md.d5b3809f.js",revision:null},{url:"assets/items_index.md.d5b3809f.lean.js",revision:null},{url:"assets/items_item-identifiers.md.01d12d24.js",revision:null},{url:"assets/items_item-identifiers.md.01d12d24.lean.js",revision:null},{url:"assets/items_items-16.md.1c92dcec.js",revision:null},{url:"assets/items_items-16.md.1c92dcec.lean.js",revision:null},{url:"assets/items_items-intro.md.d3de7840.js",revision:null},{url:"assets/items_items-intro.md.d3de7840.lean.js",revision:null},{url:"assets/items_spawning-items.md.2bede622.js",revision:null},{url:"assets/items_spawning-items.md.2bede622.lean.js",revision:null},{url:"assets/items_spear.md.e36b21c2.js",revision:null},{url:"assets/items_spear.md.e36b21c2.lean.js",revision:null},{url:"assets/items_throwable.md.aba11726.js",revision:null},{url:"assets/items_throwable.md.aba11726.lean.js",revision:null},{url:"assets/items_tool-durability.md.73b01968.js",revision:null},{url:"assets/items_tool-durability.md.73b01968.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.f960f8e4.js",revision:null},{url:"assets/items_troubleshooting-items.md.f960f8e4.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.89b67f68.js",revision:null},{url:"assets/items_vanilla-usage-items.md.89b67f68.lean.js",revision:null},{url:"assets/items_vui-full.md.8b693b96.js",revision:null},{url:"assets/items_vui-full.md.8b693b96.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ac890b37.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.ac890b37.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.be8aa763.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.be8aa763.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.81897031.js",revision:null},{url:"assets/json-ui_best-practices.md.81897031.lean.js",revision:null},{url:"assets/json-ui_index.md.b5774122.js",revision:null},{url:"assets/json-ui_index.md.b5774122.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.234b9649.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.234b9649.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.79491a03.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.79491a03.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.703699ff.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.703699ff.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.3e5753ad.js",revision:null},{url:"assets/json-ui_string-to-number.md.3e5753ad.lean.js",revision:null},{url:"assets/loot_index.md.36b83713.js",revision:null},{url:"assets/loot_index.md.36b83713.lean.js",revision:null},{url:"assets/loot_item-functions.md.61d688de.js",revision:null},{url:"assets/loot_item-functions.md.61d688de.lean.js",revision:null},{url:"assets/loot_loot-tables.md.a7b03e2a.js",revision:null},{url:"assets/loot_loot-tables.md.a7b03e2a.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.089abbd0.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.089abbd0.lean.js",revision:null},{url:"assets/loot_recipes.md.b297b262.js",revision:null},{url:"assets/loot_recipes.md.b297b262.lean.js",revision:null},{url:"assets/loot_trade-tables.md.c91b9979.js",revision:null},{url:"assets/loot_trade-tables.md.c91b9979.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.f8b80211.js",revision:null},{url:"assets/loot_trading-behavior.md.f8b80211.lean.js",revision:null},{url:"assets/meta_addon-performance.md.e3243327.js",revision:null},{url:"assets/meta_addon-performance.md.e3243327.lean.js",revision:null},{url:"assets/meta_index.md.7fa77d0a.js",revision:null},{url:"assets/meta_index.md.7fa77d0a.lean.js",revision:null},{url:"assets/meta_jq.md.af2caf51.js",revision:null},{url:"assets/meta_jq.md.af2caf51.lean.js",revision:null},{url:"assets/meta_style-guide.md.5bf0976c.js",revision:null},{url:"assets/meta_style-guide.md.5bf0976c.lean.js",revision:null},{url:"assets/meta_useful-links.md.e93e8506.js",revision:null},{url:"assets/meta_useful-links.md.e93e8506.lean.js",revision:null},{url:"assets/meta_using-schemas.md.bfb1510d.js",revision:null},{url:"assets/meta_using-schemas.md.bfb1510d.lean.js",revision:null},{url:"assets/meta_version-control.md.a91f7bab.js",revision:null},{url:"assets/meta_version-control.md.a91f7bab.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.e424d11c.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.e424d11c.lean.js",revision:null},{url:"assets/nbt_index.md.c36f51e5.js",revision:null},{url:"assets/nbt_index.md.c36f51e5.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.dbf1fe8d.js",revision:null},{url:"assets/nbt_mcstructure.md.dbf1fe8d.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e3947506.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.e3947506.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.7e94a682.js",revision:null},{url:"assets/nbt_step-by-step-example.md.7e94a682.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.cc171523.js",revision:null},{url:"assets/nbt_structure-limits.md.cc171523.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.6f6aaa10.js",revision:null},{url:"assets/particles_disabling-particles.md.6f6aaa10.lean.js",revision:null},{url:"assets/particles_index.md.e178a487.js",revision:null},{url:"assets/particles_index.md.e178a487.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.1e8a5607.js",revision:null},{url:"assets/particles_particles-and-sounds.md.1e8a5607.lean.js",revision:null},{url:"assets/particles_particles.md.e1c7e476.js",revision:null},{url:"assets/particles_particles.md.e1c7e476.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.b4865f50.js",revision:null},{url:"assets/particles_vanilla-particles.md.b4865f50.lean.js",revision:null},{url:"assets/privacy.md.4dac1e2d.js",revision:null},{url:"assets/privacy.md.4dac1e2d.lean.js",revision:null},{url:"assets/scripting_api-environment.md.7625c573.js",revision:null},{url:"assets/scripting_api-environment.md.7625c573.lean.js",revision:null},{url:"assets/scripting_custom-command.md.d1139ac8.js",revision:null},{url:"assets/scripting_custom-command.md.d1139ac8.lean.js",revision:null},{url:"assets/scripting_game-tests.md.bba36cfd.js",revision:null},{url:"assets/scripting_game-tests.md.bba36cfd.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.3cdffba5.js",revision:null},{url:"assets/scripting_gametest-form.md.3cdffba5.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.1030ee04.js",revision:null},{url:"assets/scripting_gametest-qna.md.1030ee04.lean.js",revision:null},{url:"assets/scripting_index.md.b3deb38a.js",revision:null},{url:"assets/scripting_index.md.b3deb38a.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.b16846ab.js",revision:null},{url:"assets/scripting_placement-prevention.md.b16846ab.lean.js",revision:null},{url:"assets/scripting_resources.md.c60127fc.js",revision:null},{url:"assets/scripting_resources.md.c60127fc.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.19982fc8.js",revision:null},{url:"assets/scripting_saving-loading.md.19982fc8.lean.js",revision:null},{url:"assets/scripting_script-modules.md.1c5af574.js",revision:null},{url:"assets/scripting_script-modules.md.1c5af574.lean.js",revision:null},{url:"assets/scripting_script-net.md.f14fb642.js",revision:null},{url:"assets/scripting_script-net.md.f14fb642.lean.js",revision:null},{url:"assets/scripting_script-server.md.9bf94f2f.js",revision:null},{url:"assets/scripting_script-server.md.9bf94f2f.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.663af0ab.js",revision:null},{url:"assets/scripting_script-watchdog.md.663af0ab.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.de88b908.js",revision:null},{url:"assets/scripting_scripting-intro.md.de88b908.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.c348149a.js",revision:null},{url:"assets/scripting_starting-scripts.md.c348149a.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.c4720c2f.js",revision:null},{url:"assets/scripting_troubleshooting.md.c4720c2f.lean.js",revision:null},{url:"assets/scripting_typescript.md.1498e2ac.js",revision:null},{url:"assets/scripting_typescript.md.1498e2ac.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.1e1a618c.js",revision:null},{url:"assets/scripting_what-is-script.md.1e1a618c.lean.js",revision:null},{url:"assets/servers_index.md.dda2eb07.js",revision:null},{url:"assets/servers_index.md.dda2eb07.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.bbe0452a.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.bbe0452a.lean.js",revision:null},{url:"assets/servers_server-software.md.5902ebfe.js",revision:null},{url:"assets/servers_server-software.md.5902ebfe.lean.js",revision:null},{url:"assets/style.c83ec0fb.css",revision:null},{url:"assets/test.md.36a0da78.js",revision:null},{url:"assets/test.md.36a0da78.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7d458139.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.7d458139.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.b4bf664e.js",revision:null},{url:"assets/visuals_animation-effects.md.b4bf664e.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.0f95318a.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.0f95318a.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a65d2d4e.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a65d2d4e.lean.js",revision:null},{url:"assets/visuals_death-animations.md.f02aa888.js",revision:null},{url:"assets/visuals_death-animations.md.f02aa888.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.f7e320e0.js",revision:null},{url:"assets/visuals_glowing-texture.md.f7e320e0.lean.js",revision:null},{url:"assets/visuals_index.md.5f6170d9.js",revision:null},{url:"assets/visuals_index.md.5f6170d9.lean.js",revision:null},{url:"assets/visuals_introduction.md.bbec5298.js",revision:null},{url:"assets/visuals_introduction.md.bbec5298.lean.js",revision:null},{url:"assets/visuals_leash-position.md.63e3710e.js",revision:null},{url:"assets/visuals_leash-position.md.63e3710e.lean.js",revision:null},{url:"assets/visuals_material-creations.md.6a4aef9d.js",revision:null},{url:"assets/visuals_material-creations.md.6a4aef9d.lean.js",revision:null},{url:"assets/visuals_materials.md.591fe892.js",revision:null},{url:"assets/visuals_materials.md.591fe892.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.1caaec36.js",revision:null},{url:"assets/visuals_math-based-animations.md.1caaec36.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.8bfbcf9a.js",revision:null},{url:"assets/visuals_player-geometry.md.8bfbcf9a.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.b75e0b25.js",revision:null},{url:"assets/visuals_remove-shadows.md.b75e0b25.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.3fe65bd7.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.3fe65bd7.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.4350fc0c.js",revision:null},{url:"assets/visuals_structure-presentation.md.4350fc0c.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.cb54047f.js",revision:null},{url:"assets/vr_editing-your-first-model.md.cb54047f.lean.js",revision:null},{url:"assets/vr_index.md.4f603e23.js",revision:null},{url:"assets/vr_index.md.4f603e23.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.e6ddf465.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.e6ddf465.lean.js",revision:null},{url:"assets/vr_pack_setup.md.5dfe8e97.js",revision:null},{url:"assets/vr_pack_setup.md.5dfe8e97.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.4ba6e181.js",revision:null},{url:"assets/world-generation_biome-tags.md.4ba6e181.lean.js",revision:null},{url:"assets/world-generation_biomes.md.9ffa7e6d.js",revision:null},{url:"assets/world-generation_biomes.md.9ffa7e6d.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.cbde903d.js",revision:null},{url:"assets/world-generation_custom-ores.md.cbde903d.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b95532ec.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.b95532ec.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.1b9015f2.js",revision:null},{url:"assets/world-generation_feature-types.md.1b9015f2.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.47ddd67d.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.47ddd67d.lean.js",revision:null},{url:"assets/world-generation_index.md.692850f6.js",revision:null},{url:"assets/world-generation_index.md.692850f6.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.79854c89.js",revision:null},{url:"assets/world-generation_structure-features.md.79854c89.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.cefef300.js",revision:null},{url:"assets/world-generation_surface-builder.md.cefef300.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.bb9967ba.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.bb9967ba.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));