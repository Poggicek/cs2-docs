---
sidebar_position: 2
---

# Commands

## List

| Name | Description | Flags |
| ---- | ----------- | ----- |
| find | Find concommands with the specified string in their name/help text. |  |
| log_dumpchannels | Dumps information about all logging channels. | dontrecord |
| log_level | Set the spew level of a logging channel. | dontrecord |
| log_verbosity | Set the verbosity of a logging channel. | dontrecord |
| log_color | Set the color of a logging channel. | dontrecord |
| log_flags | Set the flags on a logging channel. | dontrecord |
| differences | Show all convars which are not at their default values (optional restricted to specific flags). |  |
| cvarlist | Show the list of convars/concommands. |  |
| help | Find help about a convar/concommand. |  |
| findflags | Find concommands by flags. |  |
| Test_ExitProcess | Test_ExitProcess &lt;exit code&gt; - immediately kill the process. | cheat |
| Test_StartLoop | Test_StartLoop &lt;loop name&gt; - Denote the start of a loop. Really just defines a named point you can jump to. |  |
| Test_LoopCount | Test_LoopCount &lt;loop name&gt; &lt;count&gt; - loop back to the specified loop start point the specified # of times. |  |
| Test_Loop | Test_Loop &lt;loop name&gt; - loop back to the specified loop start point unconditionally. |  |
| Test_LoopForNumSeconds | Test_LoopForNumSeconds &lt;loop name&gt; &lt;time&gt; - loop back to the specified start point for the specified # of seconds. |  |
| Test_RandomChance | Test_RandomChance &lt;percent chance, 0-100&gt; &lt;token1&gt; &lt;token2...&gt; - Roll the dice and maybe run the command following the percentage chance. |  |
| Test_StartScript | Start a test script running.. |  |
| Test_Checkpoint | Indicate to a test script that a checkpoint has been reached |  |
| scrubber | Scrub system off - not a dev build |  |
| lrucache_stats | Spews information about all CUtlLRUCaches |  |
| lrucache_reset_stats | Resets stats for the specified CUtlLRUCaches (or all if none specified) |  |
| lrucache_set_size | Sets the specified cache to the specified size |  |
| lrucache_flush | Flushes the specified cache |  |
| loop_dump | Print the listeners of the current loop mode |  |
| addons | list current addon info. |  |
| host_timescale_inc | Increment the timescale by one step | cheat |
| host_timescale_dec | Decrement the timescale by one step | cheat |
| vis_debug_show | Show/hide the vis debug visualization |  |
| vis_debug_sunclusters | Showing clusters for sun/csm rendering. Red (full sun csm & lighting), Orange (no viewmodel sun or csm), Green (no sun at all) |  |
| vis_debug_record_start | Record a path to debug vis |  |
| vis_debug_record_stop | Record a path to debug vis |  |
| vis_debug_find_los | Find or clear the vis LOS to here |  |
| vis_debug_tracelos | Trace rays and check vis from the current camera |  |
| vis_debug_lock | Lock vis LOS origin to current |  |
| vis_debug_currentcluster | Show the current cluster number |  |
| vis_debug_dumpvisibleclusters | Show the list of visible clusters |  |
| vis_debug_drawcluster | Add cluster # to visualization, (-1) to clear |  |
| vis_debug_sphere | Draw clusters in a sphere of radius around the camera |  |
| fog_override_color | Sets the fog color override | cheat |
| clear | Clear console output. | dontrecord |
| clearall | Clear console output from all views. | dontrecord |
| consoletool | Open a VConsole subtool. | dontrecord |
| condump | dump the text currently in the console to condumpXX.log |  |
| key_listboundkeys | List bound keys with bindings. |  |
| key_findbinding | Find key bound to specified command string. |  |
| toggle | Toggles specified convar value on and off. | dontrecord |
| blink | Blink specified convar value between two values at the specified duration. | dontrecord |
| incrementvar | Increment specified convar value. | dontrecord |
| cyclevar | Cycle through specified convar values. | dontrecord |
| exec | Execute a cfg file | dontrecord |
| execifexists | Execute a cfg file if file exists | dontrecord |
| exec_async | Execute a cfg file over time | cheat dontrecord |
| run_perftest | Execute perftest.cfg | cheat dontrecord |
| push_var_values | Save convars and config values |  |
| pop_var_values | Restore previously pushed convars and config values |  |
| multvar | Multiply specified convar value. | dontrecord |
| bind | Bind a key. | release |
| bindss | Bind a key for a particular splitscreen player. | release |
| bindtoggle | Performs a bind &lt;key&gt; "increment var &lt;cvar&gt; 0 1 1". |  |
| unbindall | Unbind all keys. | release |
| unbind | Unbind a key. | release |
| binddefaults | Bind all keys to their default values. | release |
| writekeybindings | Saves current key bindings to disk. | release |
| echoln | Echo the command arguments on the console |  |
| input_state | input_state | developmentonly |
| grep | grep line for pattern, print out matching lines only |  |
| alias | Alias a command. |  |
| echo | Echo text to console. | server_can_execute |
| repeat_last_console_command | Repeat last console command. |  |
| maps | Displays list of maps. |  |
| map | map &lt;mapname&gt; :Load a new map. | vconsole_fuzzy_matching vconsole_set_focus |
| changelevel | changelevel &lt;mapname&gt; :Multiplayer change level. |  |
| connect | Connect to a remote server. |  |
| connect_hltv | Connect to a remote HLTV server. |  |
| restart | Poor man's restart: reload the current map from disk. | cheat vconsole_set_focus |
| reloadgame | Reload the most recent saved game. | cheat vconsole_set_focus |
| load | Usage:.   load [save file name]. | dontrecord vconsole_fuzzy_matching |
| disconnect | Disconnect from server |  |
| status | Print connection status |  |
| cl_fullupdate | Force uncompressed update | cheat |
| pause | Toggle the server pause state. |  |
| setpause | Set the pause state of the server. |  |
| unpause | Clear the pause state of the server. |  |
| cmd | Forward command to server. |  |
| p2p_listpeers | List currently known peers. |  |
| kickid | Kick a player by userid or uniqueid, with a message. | dontrecord |
| kick | Kick a player by name. | dontrecord |
| kickid_hltv | Kick a player by userid or uniqueid, with a message. | dontrecord |
| demo_writemetafile | save current meta file demo_&lt;version&gt;.meta file for use in demo upconversion. | dontrecord |
| r_toggleviewportsize | Toggles viewport size between small + full window. |  |
| r_viewport | Slams viewport size to a specified value. |  |
| r_render_coordination_state | Prints out the current render coordination state. |  |
| r_force_engine_render_frame | Force a single render of the engine viewport. |  |
| check_dpi | Show the currently detected DPI. |  |
| screenshot | Take a screenshot: screenshot [filename] |  |
| jpeg_screenshot | Take a jpeg screenshot: jpeg_screenshot [filename] [quality 1-100]. |  |
| png_screenshot | Take a .png screenshot: png_screenshot [filename] |  |
| playsound | playsound &lt;soundname&gt; |  |
| ss_add | Adds a splitscreen user. |  |
| ss_remove | Removes a splitscreen user. |  |
| host_writeconfig | Saves out the user config values. |  |
| stats_print | Prints out perf statistics to the console, clears perf history |  |
| stats_print_gpu | Prints out GPU perf statistics to the console.  Requires stats_display &gt; 0, and stats_collect_gpu = true.  Optional argument of CSV filename |  |
| time_asserts | Time asserts and show the lengthiest asserts | developmentonly |
| vprof_on | Enable vprof |  |
| vprof_off | Disable vprof |  |
| vprof_reset | Reset the stats in VProf profiler |  |
| vprof_reset_peaks | Reset just the peak time in VProf profiler |  |
| vprof_generate_report | Generate a report to the console. |  |
| vprof_generate_report_budget | Generate a report to the console based on budget group. |  |
| vprof_generate_report_hierarchy | Generate a report to the console. |  |
| vprof_vtrace | Toggle whether vprof data is sent to VTrace |  |
| vprof_time_scale | Scale used when displaying time (0 = use default) | developmentonly hidden |
| vprof_loadhitstore_scale | Scale used when displaying load-hit-stores (0 = use default) | developmentonly hidden |
| vprof_dump_counters | Dump vprof counters to the console |  |
| mem_dump | Dump memory stats to text file or &lt;stdout&gt;. |  |
| mem_compact | Compacts the heap |  |
| vmem_dump | Dump memory stats to log. |  |
| memory | Print memory stats. |  |
| memory_check_limit | Assert if peak memory use is over the limit. | developmentonly |
| quit | Quit the game | vconsole_set_focus |
| crash | Crash the client. Optional parameter -- type of crash:. 0: read from NULL. 1: write to NULL. 2: force an Assert | cheat |
| crash_job | Cause the engine to crash in a job thread (Debug!!) | cheat |
| crash_thread | Cause the engine to crash in a brand new non-main thread (Debug!!) | cheat |
| crash_error | Cause the engine to crash by Plat_FatalError on main thread (Debug!!) | cheat |
| crash_error_thread | Cause the engine to crash by Plat_FatalError on non-main thread (Debug!!) | cheat |
| crash_error_job | Cause the engine to crash by Plat_FatalError on job thread (Debug!!) | cheat |
| force_assert | Fire an assertion failure | developmentonly |
| force_fatal_error | Fire a fatal error | developmentonly |
| force_hibernate | Force toggle hibernation state | developmentonly |
| console_test | Output text to test console | developmentonly |
| open_asset | Opens an asset in it's primary editor of choice. Specify the full path to the asset from the mod directory. |  |
| disable_priority_boost | Disable focus based priority boost |  |
| enable_priority_boost | Disable focus based priority boost |  |
| generate_minidump_comment | Generate a minidump comment and spew the results to the console | developmentonly |
| sys_info | Print system information to the console |  |
| force_floating_point_exceptions | Enable floating point exceptions to find bugs | developmentonly |
| UpdateBinarySizes | Dumps the binary sizes to use for the game in loadaddress.vpc |  |
| StackStats_Dump | Dump a named stackstats structure to disk. Usage: stackstats_dump "structname" ["filename"] | developmentonly |
| stop | Finish recording demo. |  |
| record | Record a demo. | dontrecord |
| _record | Record a demo incrementally. | dontrecord |
| vtune | Controls VTune's sampling. |  |
| playdemo | Play a recorded demo file (.dem ). |  |
| timedemo | Play a demo and report performance info. |  |
| timedemoquit | Play a demo, report performance info, and then exit |  |
| listdemo | List demo file contents. |  |
| benchframe | Takes a snapshot of a particular frame in a time demo. |  |
| demo_pause | Pauses demo playback. |  |
| demo_resume | Resumes demo playback. |  |
| demo_togglepause | Toggles demo playback. |  |
| demo_goto | Skips to location in demo. |  |
| demo_gototick | Skips to a tick in demo. |  |
| demo_marktick | Marks the current demo playback tick for later use |  |
| demo_gotomark | Skips the current demo playback to the marked tick |  |
| demo_info | Print information about currently playing demo. |  |
| demo_timescale | Sets demo replay speed. |  |
| startdemos | Play demos in demo sequence. |  |
| nextdemo | Play next demo in sequence. |  |
| demolist | Print demo sequence list. |  |
| stopdemos | Stop looping demos (current demo will complete). |  |
| rpestats | dump rpe |  |
| instant_replay_pause | Pauses instant replay. |  |
| instant_replay_resume | Resumes instant replay. |  |
| instant_replay_togglepause | Toggles instant replay. |  |
| instant_replay_skip | Number of seconds to skip back to instant replay from current position |  |
| instant_replay_skip_live | Number of seconds to skip back to instant replay from live |  |
| instant_replay_goto_tick | Goto a direct timestamp of the replay |  |
| instant_replay_goto_tick_relative | Goto a direct timestamp of the replay |  |
| instant_replay_live | If in replay, jumps back to live |  |
| instant_replay_timescale | Sets instant replay speed. |  |
| vprof_remote_start | Request a VProf data stream from the remote server (requires authentication) |  |
| vprof_remote_stop | Stop an existing remote VProf data request |  |
| rcon | Issue an rcon command. | dontrecord |
| cl_precacheinfo | Show precache info (client). |  |
| cl_spewworldgroups | Spew world groups (client) | developmentonly |
| cl_spewserializers | Spew serializers | cheat |
| cl_checkdeclareclasses | Check game code serializers | cheat |
| sv_pure | Show user data. |  |
| sv_fullupdate | Force a full update for all clients. |  |
| users | Show user info for players on server. |  |
| sv_spewworldgroups | Spew world groups (server) | developmentonly |
| sv_shutdown | Sets the server to shutdown when all games have completed |  |
| sv_showtags | Describe current gametags. |  |
| sv_clientrates | Show client rates. |  |
| banip | Add an IP address to the ban list. |  |
| addip | Add an IP address to the ban list. |  |
| removeip | Remove an IP address from the ban list. |  |
| listip | List IP addresses on the ban list. |  |
| writeip | Save the ban list to file. |  |
| banid | Add a user ID to the ban list. |  |
| removeid | Remove a user ID from the ban list. |  |
| listid | Lists banned users. |  |
| writeid | Writes a list of permanently-banned user IDs to file. |  |
| log | Enables logging to file, console, and udp &lt; on \| off &gt;. |  |
| sv_packstats | Show entity packing stats, pass 'clear' as argument to reset counts. | release |
| redirectstart | Redirect server console output | hidden |
| redirectend | Redirect server console output | hidden |
| stats | Prints server performance variables |  |
| net_stats_json | Output server networking statistics in json format |  |
| sv_spewmeta | Spew serializer meta | cheat |
| sv_metaduplication | Check serializer meta for duplication, add verbose to command for full spew | cheat |
| startmovie | Start recording movie frames. | dontrecord |
| endmovie | Stop recording movie frames. | dontrecord |
| setinfo | Adds a new user info value | clientcmd_can_execute |
| cpuinfo | Print CPU configuration information |  |
| reset_gameconvars | Reset game convars to default values | cheat |
| status_json | Print status in JSON format |  |
| mem_test |  |  |
| dumpstringtable | Usage:  dumpstringtable &lt;tablename \|all&gt; &lt;sv \| cl&gt; &lt;verbose \| simple&gt; &lt;element&gt;      Print string tables to console, verbose to dump data, simple to show name and count only, can specifiy a single numeric element index to restrict spew. |  |
| playcast | Play a broadcast |  |
| tv_broadcast_resend | resend broadcast data to broadcast relay |  |
| tv_status | Show SourceTV server status. |  |
| tv_relay | Connect to SourceTV server and relay broadcast. |  |
| tv_stop | Stops the SourceTV broadcast. |  |
| tv_retry | Reconnects the SourceTV relay proxy. |  |
| tv_record | Starts SourceTV demo recording. |  |
| tv_broadcast_status | Print out broadcast status |  |
| tv_stoprecord | Stops SourceTV demo recording. |  |
| tv_clients | Shows list of connected SourceTV clients. |  |
| tv_mem | hltv memory statistics. Use with "ent 10" (dump entity 10 memory usage) or "top 8" (dump top 8 memory users) or "class" CWorld (dump CWorld class) |  |
| gameui_hide | Hides the game UI |  |
| escape | Escape key pressed. | clientcmd_can_execute |
| gameui_activate | Shows the game UI |  |
| gameui_preventescape | Escape key doesn't hide game UI |  |
| gameui_allowescapetoshow | Escape key allowed to show game UI |  |
| gameui_preventescapetoshow | Escape key doesn't show game UI |  |
| gameui_allowescape | Escape key allowed to hide game UI |  |
| progress_enable |  |  |
| bug | bug [auto_fill_tokens] [-title &lt;text&gt;] [-noscreenshot] : Activate the bug reporter. | dontrecord |
| auto_bug | auto_bug : create non-interactive bug report. | dontrecord |
| +bugvoice | Start recording bug voice attachment. | dontrecord |
| -bugvoice | Finish recording bug voice attachment. | dontrecord |
| bugvoice_clear | Clear voice attachment data. | dontrecord |
| bugvoice_save | Write buffered voice attachment data to file. | dontrecord |
| cl_break_on_missing_resource | Break in debugger when missing resource match is found..Format: cl_break_on_missing_resource &lt;substring&gt; /(empty to break on all) / 0 to turn off.. | developmentonly |
| toggleconsole | Show/hide the console. | dontrecord |
| hideconsole | Hide the console. | dontrecord |
| showconsole | Show the console. | dontrecord |
| path | Show the filesystem path. |  |
| fs_dump_open_duplicate_times | Set fs_report_long_reads 1 before loading to use this. Prints a list of files that were opened more than once and ~how long was spent reading from them. |  |
| fs_clear_open_duplicate_times | Clear the list of files that have been opened. |  |
| ime_info | Spew IME info. | dontrecord |
| key_updatelayout | Updates game keyboard layout to current windows keyboard setting. |  |
| dump_localization_files | List all loaded localization files |  |
| dump_loc_token | List information on the given token |  |
| schema_list_bindings | schema_list_bindings &lt;substring&gt; - List registered global-scope schema bindings (classes & enums). If no substring, list them all. | developmentonly |
| schema_all_list_bindings | schema_all_list_bindings &lt;substring&gt; - List all scopes registered schema bindings (classes & enums). If no substring, list them all. | developmentonly |
| schema_dump_binding | schema_dump_binding &lt;class_or_enum_name&gt; - Print information about the named class or enum. | developmentonly |
| schema_detailed_class_layout | schema_detailed_class_layout &lt;class_name&gt; - Print a detailed memory layout of the class (including inline structs). | developmentonly |
| schema_stats | schema_stats - Print a summary of various schemasystem statistics. | developmentonly |
| schema_meta_stats | schema_meta_stats [&lt;options&gt;]- Print a summary of schemasystem metadata statistics. | developmentonly |
| rs_dump_stats | rs_dump_stats - Dump resourcesystem stats. | developmentonly |
| resource_repeated_reload | resource_repeated_reload &lt;count&gt; &lt;resource_name&gt; (&lt;resource name&gt; ...): Load and unload the specified resource(s) |  |
| resource_manifest_validate_modules | Scan all of the loaded modules and validate any resource manifests found |  |
| resource_list | List loaded resources matching a substring |  |
| resource_log_allocate_timing | Log time spent in Allocate for all resource types |  |
| resource_reset_allocate_timing | Reset tracked time spent in Allocate (see resource_log_allocate_timing) |  |
| resource_leaks | resource_leaks &lt;resource_name&gt;: Show resource leaks for the named resource |  |
| r_print_texture_stats | Texture stats |  |
| r_gpu_mem_stats | Display GPU memory usage. | linked_concommand |
| r_dx11_report_live_objects | Prints out live D3D11 objects (requires -dx11debug) |  |
| r_textures_evict_all | Evict all resident texture. | linked_concommand |
| r_renderdoc_capture_frame | Triggers a RenderDoc capture | linked_concommand |
| mat_assert_on_shader_use | Assert on shader used based on substring of shader name | developmentonly |
| mat_reloadmaterials | Reloads all materials. Takes an optional substring as an argument. |  |
| mat_reinitmaterials | Reinitializes all loaded materials, reloading their shaders. |  |
| mat_reloadshaders | Reloads all shaders. Takes optional substrings of shader names to recompile as arguments. |  |
| mat_disable_dynamic_shader_compile | Reloads all shaders from vcs files until the next time mat_reloadshaders is called |  |
| mat_clearshadercache | Clears the shader cache used for dynamic shader compile. |  |
| mat_set_shader_quality | Force shader quality setting (valid values are 0 or 1) |  |
| mat_print_shader_quality | Print current shader quality setting |  |
| mat_print_materials | Print loaded materials. Takes an optional substring as an argument. |  |
| mat_print_dead_materials | Print loaded materials that have no valid layers due to not supporting any of the modes in gameinfo.gi. |  |
| mat_print_error_materials | Print loaded materials that are using the error shader or material. |  |
| mat_print_materials_last_frame | Print materials used last frame |  |
| mat_print_materials_unused | Print materials that have never been used |  |
| mat_print_expensive_materials | Print materials sorted by cost heuristic |  |
| mat_reset_material_costs | Reset material cost heuristic |  |
| mat_print_material_info | Print info about a specific material |  |
| mat_print_textures | Print loaded textures in alphabetical order. Takes an optional substring as an argument. |  |
| mat_print_textures_size | Print loaded textures in ascending size order. Takes an optional substring as an argument. |  |
| mat_print_textures_size_in_memory | Print loaded textures in ascending size order as they are in memory. Takes an optional substring as an argument. |  |
| mat_print_shaders | Print loaded shaders. Takes a substring as an argument. |  |
| mat_print_shader_info | Print detailed info about a single shader. Takes a shader name (hero.vfx) as an argument. |  |
| mat_print_modes | Print supported rendering modes. |  |
| spew_fonts | Spew information about font manager fonts |  |
| @panorama_dump_symbols | &lt;ESymbolType&gt; Dump all of the symbols in the Panorama symbol table |  |
| @panorama_print_cache_status | Print internal panorama refcounts for every file |  |
| @panorama_dispatch_event | Dispatch the event defined by the argument string. No creating panel is specified. |  |
| @panorama_generate_layout_xsd | Generate the Layout XML Schema Definition for the current run-time (types are dependent on which game DLL is running). |  |
| dump_panorama_events | print panorama event types and their documentation |  |
| @panorama_print_svg_stats |  | developmentonly |
| dump_panorama_css_properties | Prints out all valid panorama CSS properties and their documentation |  |
| dump_panorama_css_properties_memstats | Prints out mem stats of all valid panorama CSS properties |  |
| dump_panorama_render_command_stats |  |  |
| lua_report_memory |  |  |
| net_spewcounts | Spew serializer counts. |  |
| net_spewserializer | Spew serializer info. | developmentonly |
| net_why_field_excluded | &lt;classname&gt; &lt;fieldname&gt;:  spew why field was excluded from networking for classname. | developmentonly |
| fs_spew_readfieldlist | index &lt;threshold bytes&gt;: spew changes to ent index, optionally only spewing if update is &gt; than threshold bytes | cheat |
| fp_trace | Toggle field path tracing to file. |  |
| net_captureculldata | Captures low-level data to replay path culling algorithm behavior in controlled unit test environment |  |
| net_validatemessages | Activates/deactivates net message validation | cheat |
| net_listallmessages | List all registered net messages | cheat |
| net_messageinfo | Display info about a message (by classname or id) | cheat |
| net_channels | Shows net channel info |  |
| net_status | Shows current network status |  |
| net_connections_stats | Print detailed network statistics for each network connection |  |
| net_option | Get or set SteamNetworkingSockets options such as fake packet lag and loss |  |
| sdr | An old command that has been renamed to 'net_option' |  |
| net_fakelag | Shorthand for 'net_option FakePacketLag_Recv' |  |
| net_serializedentitymemory | Spew CSerializedEntity memory |  |
| net_serializedentitymetadatainfo | Spew CSerializedEntity metadata information |  |
| ik_debug_fabrik_backwards_iteration_toggle |  |  |
| ik_debug_fabrik_forwards_iteration_toggle |  |  |
| phys_debug_draw | Set up debug-draw of physics internal state |  |
| model_dump_convert_info | Print model load-time conversion info | gamedll clientdll linked_concommand |
| print_model_bind_pose | Prints the bind pose of the specified model. Optionally limits to a particular bone and its parent chain, otherwise prints the entire skeleton. |  |
| reload_model | Force a reload of a vmdl resource |  |
| snd_front_headphone_position | Specifies the position (in degrees) of the virtual front left/right headphones. |  |
| snd_rear_headphone_position | Specifies the position  (in degrees) of the virtual rear left/right headphones. |  |
| snd_front_stereo_speaker_position | Specifies the position (in degrees) of the virtual front left/right speakers. |  |
| snd_rear_stereo_speaker_position | Specifies the position (in degrees) of the virtual rear left/right speakers. |  |
| snd_front_surround_speaker_position | Specifies the position (in degrees) of the virtual front left/right speakers. |  |
| snd_rear_surround_speaker_position | Specifies the position (in degrees) of the virtual rear left/right speakers. |  |
| snd_side_surround_speaker_position | Specifies the position (in degrees) of the virtual rear left/right speakers. |  |
| snd_headphone_pan_exponent | Specifies the exponent for the pan xfade from phone to phone if the "exp" pan law is being used. |  |
| snd_stereo_speaker_pan_exponent | Specifies the exponent for the pan xfade from speaker to speaker if the "exp" pan law is being used. |  |
| snd_surround_speaker_pan_exponent | Specifies the exponent for the pan xfade from speaker to speaker if the "exp" pan law is being used. |  |
| snd_headphone_pan_radial_weight | Apply cos(angle) * weight before pan law |  |
| snd_stereo_speaker_pan_radial_weight | Apply cos(angle) * weight before pan law |  |
| snd_surround_speaker_pan_radial_weight | Apply cos(angle) * weight before pan law |  |
| soundsysteminfo | Describe the current sound device without an active voice list. |  |
| play | Play a sound. | server_can_execute |
| playvol | Play a sound at a specified volume. |  |
| stopsound |  | cheat |
| soundinfo | Describe the current sound device with an active voice list. |  |
| sndplaydelay |  |  |
| snd_setmixer | Set named Mixgroup of current mixer to mix vol, mute, solo. | cheat |
| snd_setmixlayer | Set named Mixgroup of named mix layer to mix vol, mute, solo. | cheat |
| snd_soundmixer_setmixlayer_amount | Set named mix layer mix amount. | cheat |
| snd_soundmixer_set_trigger_factor | Set named mix layer / mix group, trigger amount. | cheat |
| snd_soundmixer_flush | Reload soundmixers.txt file. |  |
| snd_soundmixer_list_mixers | List all mixers to dev console. |  |
| snd_soundmixer_list_mix_layers | List all mix layers to dev console. |  |
| snd_soundmixer_list_mix_groups | List all mix groups to dev console. |  |
| snd_print_current_mixer_mixgroup | Get data related to mix group matching string |  |
| snd_async_flush | Flush all unlocked async audio data |  |
| snd_async_showmem | Show async memory stats |  |
| snd_async_showmem_summary | Show brief async memory stats |  |
| snd_async_showmem_music | Show async memory stats for just non-streamed music |  |
| movie_fixwave | Fixup corrupted .wav file if engine crashed during startmovie/endmovie, etc. |  |
| snd_compare_soundevents | Compare the compiled and loaded contents of 2 soundevents. | cheat |
| snd_print_soundevent | Print the data associated with the specified soundevent. | developmentonly vconsole_fuzzy_matching vconsole_set_focus |
| snd_print_soundevent_default_public_properties | Print the default public properties of a specified soundevent. Values do not reflect values set on the soundevent. For that see "snd_print_soundevent" | developmentonly vconsole_fuzzy_matching vconsole_set_focus |
| snd_list_soundevents | List all available soundevents | cheat |
| snd_list_deferred_soundevents | List all current deferred load soundevents | cheat |
| snd_list_soundevents_by_stack | List all available soundevents using specified stack name | cheat |
| snd_remove_soundevent | Remove the specified soundevent | cheat |
| snd_remove_all_soundevents | Remove all soundevents | cheat |
| snd_soundevent_clear_deferred | Clear the list of deferred soundevents for loading. | cheat |
| snd_steamaudio_export_scene | Exports scene currently used by Steam Audio as a phononscene file. | cheat |
| snd_steamaudio_probes_nearby | Load all the probes from a file and log the nearby probes within the radius. |  |
| snd_get_physics_surface_properties | Get physics surface properties for all the materials. | cheat |
| snd_set_physics_surface_properties | Set physics surface properties for materials. Usage: &lt;heuristic #&gt; &lt;commit&gt; | cheat |
| vmix_debug_list | Debug dump the list of available vmix graphs |  |
| vmix_input | Set an input mix value | cheat |
| vmix_output | Dump main graph control output values | cheat |
| soundlist | List all known sounds. |  |
| snd_cast | Casts a ray and starts a sound event where the ray hits. The sound event will retrigger periodically if cl_snd_cast_retrigger is set. The sound event will clear previous snd_cast events if cl_snd_cast_clear is set. Usage: snd_cast &lt;eventname&gt; [&lt;retrigger time&gt;] [&lt;max distance&gt;]. Arguments that are specified will become defaults for the remainder of the session. | cheat |
| snd_sos_test_soundmessage | test | cheat |
| snd_sos_pause_soundevent | Pause the specified soundevent in the list | cheat |
| snd_sos_unpause_soundevent | UnPause the first soundevent in the list | cheat |
| snd_sos_set_operator_field | Currently sets a single float operator field | cheat |
| snd_sos_set_operator_field_by_guid | Currently sets a single float operator field | cheat |
| snd_sos_get_operator_field_info | Currently gets info for a single operator field | cheat |
| snd_sos_soundevent_profile | Dump a record of current soundevents and profile data | cheat |
| snd_sos_flush_operators | Flush and re-parse the sound operator system | cheat |
| snd_sos_print_tool_properties | Prints the current state of tool properties. | cheat |
| snd_sos_resolve_execute_operator | Resolve the inputs and execute one specified operator from a specified stack | cheat |
| snd_sos_print_operator_stacks | Prints a list of currently available stacks | cheat |
| snd_sos_print_strings | Prints a list of currently cached strings | cheat |
| snd_sos_print_field_name_strings | Prints a list of currently cached field name strings | cheat |
| snd_sos_print_groups | Prints the current state of the groups system | cheat |
| snd_sos_print_operators | Prints a list of currently available operators | cheat |
| snd_sos_print_operator_stack | Prints a master list of currently exposed variables | cheat |
| snd_sos_print_operator_stack_opeator | Prints an operator from a stack | cheat |
| snd_sos_print_stack_exec_list | Prints the current stack execution list | cheat |
| snd_sos_start_soundevent | Starts a specified soundevent | cheat |
| snd_sos_start_soundevent_at_pos | Starts a specified soundevent at the given position | cheat |
| snd_sos_stop_soundevent_guid | Stops a specified soundevent | cheat |
| snd_sos_stop_soundevent_index | Stops a specified soundevent | cheat |
| snd_sos_stop_all_soundevents | Stops all soundevents currently on the execution list | cheat |
| snd_sos_print_class_sizes | Prints the sizes of relevant sos classes. | cheat |
| snd_print_samplers | List all available samplers | cheat |
| snd_samplers_play_note | Play a note from a specified sampler | cheat |
| snd_samplers_stop_note | Stop a note from a specified sampler | cheat |
| snd_print_sequences | List all available midi sequences | cheat |
| snd_sequence_stop_track | Stops the specified track | cheat |
| snd_sequence_stop_all_tracks | Stops all currently playing sequences | cheat |
| snd_sequence_set_track_bpm | Sets the tempo of the specified track | cheat |
| snd_sequence_set_track_transpose | Sets the transposition of the specified track | cheat |
| snd_print_arrangements | List all available sequence arrangments | cheat |
| snd_print_activetracks | List all active tracks | cheat |
| snd_arrangement_start | Starts the specified arrangement. | cheat |
| snd_vmidi_flush | Purge and reload all vmidi data and files. | cheat |
| snd_steamaudio_halton_sequence | Generate Halton Sequence for a given order and number of samples. | cheat |
| pixelvis_debug | Dump debug info | cheat |
| sc_showclasses | List the object class names known by scenesystem. | cheat |
| sc_setclassflags | Low level command to set the flags byte associated with an object class. sc_SetClassFlags &lt;classname&gt; &lt;value&gt;. | cheat |
| sc_list_extradata_allocations | Prints out the overall extra data allocation counts |  |
| sc_listworlds | List all the active sceneworlds | cheat |
| sc_dumpworld | Dump a list of the objects in a sceneworld (Usage: sc_dumpworld &lt;world_index&gt;) | cheat |
| sc_dumpworld3d | Dump the objects in a sceneworld into a 3d geoview buffer (Usage: sc_dumpworld3d &lt;world_index&gt;) | cheat |
| entity_lump_list | List all known entity lumps |  |
| entity_lump_spew | Dump the contents of an entity lump |  |
| world_layer_list | List all world layers |  |
| world_layer_set_visible | Show or hide the specified world layer |  |
| world_dump_loaded_worlds | Dump all of the worlds that we know about |  |
| cl_particles_dumplist | Dump all new particles, optional name substring. | clientdll linked_concommand |
| cl_particles_dumpsimlist | Dump all simulating particles, optional name substring. | clientdll linked_concommand |
| particle_reset_assertions | Causes all single-fire particle assertions to trigger once more. | developmentonly |
| particle_stop_all | Stops all particle systems currently playing | developmentonly clientdll cheat |
| dumpparticlelist | Print out information on existing particle systems |  |
| particle_profile | Profile particle |  |
| particle_profile_spike | Profile particle spike |  |
| tenfoot_pickle_dictionaries | compiles daisy wheel input dictionaries to more performant form | clientdll linked_concommand |
| tenfoot_pickle_single_dictionary | [language] compiles one daisy wheel input dictionary | clientdll linked_concommand |
| tenfoot_match | [prefix]: matches a string prefix | clientdll linked_concommand |
| tenfoot_text_hotspots | find text autosuggest hot spots | clientdll linked_concommand |
| nav_select_radius | Adds all areas in a radius to the selection set | gamedll cheat |
| nav_toggle_selected_set | Toggles all areas into/out of the selected set. | gamedll cheat |
| nav_store_selected_set | Stores the current selected set for later retrieval. | gamedll cheat |
| nav_recall_selected_set | Re-selects the stored selected set. | gamedll cheat |
| nav_add_to_selected_set | Add current area to the selected set. | gamedll cheat |
| nav_add_to_selected_set_by_id | Add specified area id to the selected set. | gamedll cheat |
| nav_remove_from_selected_set | Remove current area from the selected set. | gamedll cheat |
| nav_toggle_in_selected_set | Remove current area from the selected set. | gamedll cheat |
| nav_clear_selected_set | Clear the selected set. | gamedll cheat |
| nav_begin_selecting | Start continuously adding to the selected set. | gamedll cheat |
| nav_end_selecting | Stop continuously adding to the selected set. | gamedll cheat |
| nav_begin_drag_selecting | Start dragging a selection area. | gamedll cheat |
| nav_end_drag_selecting | Stop dragging a selection area. | gamedll cheat |
| nav_begin_drag_deselecting | Start dragging a selection area. | gamedll cheat |
| nav_end_drag_deselecting | Stop dragging a selection area. | gamedll cheat |
| nav_raise_drag_volume_max | Raise the top of the drag select volume. | gamedll cheat |
| nav_lower_drag_volume_max | Lower the top of the drag select volume. | gamedll cheat |
| nav_raise_drag_volume_min | Raise the bottom of the drag select volume. | gamedll cheat |
| nav_lower_drag_volume_min | Lower the bottom of the drag select volume. | gamedll cheat |
| nav_toggle_selecting | Start or stop continuously adding to the selected set. | gamedll cheat |
| nav_begin_deselecting | Start continuously removing from the selected set. | gamedll cheat |
| nav_end_deselecting | Stop continuously removing from the selected set. | gamedll cheat |
| nav_toggle_deselecting | Start or stop continuously removing from the selected set. | gamedll cheat |
| nav_split | To split an Area into two, align the split line using your cursor and invoke the split command. | gamedll cheat |
| nav_mark | Marks the Area or Ladder under the cursor for manipulation by subsequent editing commands. | gamedll cheat |
| nav_unmark | Clears the marked Area or Ladder. | gamedll cheat |
| nav_disconnect | To disconnect two Areas, mark an Area, highlight a second Area, then invoke the disconnect command. This will remove all connections between the two Areas. | gamedll cheat |
| nav_avoid | Toggles the 'avoid this area when possible' flag used by the AI system. | gamedll cheat |
| nav_test_level_hull | Find entities that intrude into the nav mesh.  List those entities in console output, and display bounding boxes around them for a while. | gamedll cheat |
| nav_test_level_hull_move |  | gamedll cheat |
| nav_clear_attributes | Clear all nav attributes of selected area. | gamedll cheat |
| nav_clear_attribute | Remove given nav attribute from all areas in the selected set. | gamedll cheat |
| nav_mark_attribute | Set nav attribute for all areas in the selected set. | gamedll cheat |
| nav_select_with_attribute | Selects areas with the given attribute. | gamedll cheat |
| nav_switch | Switches to navmesh for the specified spawngroup | gamedll |
| noclip | Toggle. Player becomes non-solid and flies.  Optional argument of 0 or 1 to force enable/disable | gamedll cheat missing4 |
| weapon_switch | Use a particular weapon   .Arguments: &lt;weapon_name&gt; | developmentonly gamedll |
| remove_weapon | Remove a weapon held by the player..      Arguments: &lt;weapon subclass name&gt; | gamedll cheat missing4 |
| sv_record_bone_setup_stats | generate bone setup statistics | developmentonly gamedll |
| rr_forceconcept | fire a response concept directly at a given character..USAGE: rr_forceconcept &lt;target&gt; &lt;concept&gt; "criteria1:value1,criteria2:value2,...".criteria values are optional.. | gamedll cheat |
| firetarget |  | gamedll cheat |
| ent_fire | Usage:.   ent_fire &lt;target&gt; [action] [value] [delay]. | gamedll cheat vconsole_fuzzy_matching |
| ent_cancelpendingentfires | Cancels all ent_fire created outputs that are currently waiting for their delay to expire. | gamedll |
| ent_fire_output | Usage:.   ent_fire_output &lt;target&gt; [output name] [value] [delay]. | gamedll cheat vconsole_fuzzy_matching |
| ent_info | Usage:.   ent_info &lt;class name&gt;. | gamedll cheat |
| ent_show_response_criteria | Print, to the console, an entity's current criteria set used to select responses..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_autoaim | Displays the entity's autoaim radius..      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_create | Creates an entity of the given designer or subclass name where the player is looking. | gamedll cheat vconsole_fuzzy_matching |
| subclass_create | Creates an entity of the given subclass where the player is looking. | gamedll cheat vconsole_fuzzy_matching |
| subclass_change | Changes the subclass of the given entity..      Arguments:      &lt;new_subclass&gt; {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat vconsole_fuzzy_matching |
| ent_teleport | Teleport the specified entity to where the player is looking..     Format: ent_teleport &lt;entity name&gt; | gamedll cheat |
| ent_orient | Orient the specified entity to match the player's angles. By default, only orients target entity's YAW. Use the 'allangles' option to orient on all axis..   Format: ent_orient &lt;entity name&gt; &lt;optional: allangles&gt; | gamedll cheat |
| respawn_player | Respawns the player from death!. | gamedll cheat |
| replay_start | Start GOTV replay: replay_start &lt;delay&gt; [&lt;player name or index&gt;] | gamedll cheat missing4 |
| replay_death | start hltv replay of last death | gamedll cheat |
| replay_stop | stop hltv replay | gamedll missing4 |
| telemetry_message | Place a message in the telemetry timeline | gamedll cheat |
| telemetry_toggle_timespan | Starts/stops a timespan with an ever increasing name. | gamedll cheat |
| rangefinder | Measures distance along a ray | gamedll cheat |
| cast_ray | Tests ray cast | gamedll cheat |
| cast_sphere | Tests sphere cast | gamedll cheat |
| cast_aabb | Tests box collision detection | gamedll cheat |
| cast_capsule | Tests capsule collision detection | gamedll cheat |
| cast_convex | Tests convex hull collision detection | gamedll cheat |
| cast_cylinder | Tests cylinder collision detection | gamedll cheat |
| cast_obb | Tests cylinder collision detection | gamedll cheat |
| cast_physics | Tests physics shape collision detection | gamedll cheat |
| cast_intervals | Tests interval ray cast | gamedll cheat |
| kill | Kills the player with generic damage | gamedll cheat missing4 |
| explode | Kills the player with explosive damage | gamedll cheat missing4 |
| killvector | Kills a player applying force. Usage: killvector &lt;player&gt; &lt;x value&gt; &lt;y value&gt; &lt;z value&gt; | gamedll cheat missing4 |
| explodevector | Kills a player applying an explosive force. Usage: explodevector &lt;player&gt; &lt;x value&gt; &lt;y value&gt; &lt;z value&gt; | gamedll cheat missing4 |
| say | Display player message | gamedll missing4 |
| say_team | Display player message to team | gamedll missing4 |
| give | Give item to player..      Arguments: &lt;item_name&gt; | gamedll vconsole_fuzzy_matching missing4 |
| setmodel | Changes's player's model | gamedll cheat |
| test_dispatcheffect | Test a clientside dispatch effect.. Usage: test_dispatcheffect &lt;effect name&gt; &lt;distance away&gt; &lt;flags&gt; &lt;magnitude&gt; &lt;scale&gt;.   Defaults are: &lt;distance 1024&gt; &lt;flags 0&gt; &lt;magnitude 0&gt; &lt;scale 0&gt;. | gamedll cheat |
| god | Toggle by default, or 0 to disable and 1 to enable. Player becomes invulnerable. | gamedll cheat missing4 |
| setpos | Move player to specified origin (must have sv_cheats). | gamedll cheat missing4 |
| setpos_player | Move specified player to specified origin (must have sv_cheats). | gamedll cheat missing4 |
| setang | Snap player eyes to specified pitch yaw &lt;roll:optional&gt; (must have sv_cheats). | gamedll cheat missing4 |
| setpos_exact | Move player to an exact specified origin (must have sv_cheats). | gamedll cheat missing4 |
| setang_exact | Snap player eyes and orientation to specified pitch yaw &lt;roll:optional&gt; (must have sv_cheats). | gamedll cheat missing4 |
| notarget | Toggle. Player becomes hidden to NPCs. | gamedll cheat missing4 |
| hurtme | Hurts the player..       Arguments: &lt;health to lose&gt; | gamedll cheat missing4 |
| groundlist | Display ground entity list &lt;index&gt; | developmentonly gamedll cheat |
| steamvrevent_quit | steamvrevent_quit | gamedll hidden |
| commentary_cvarsnotchanging |  | gamedll |
| commentary_finishnode |  | gamedll missing4 |
| test_entity_blocker | Test command that drops an entity blocker out in front of the player. | gamedll cheat |
| dbghist_addline | Add a line to the debug history. Format: &lt;category id&gt; &lt;line&gt; | gamedll |
| dbghist_dump | Dump the debug history to the console. Format: &lt;category id&gt;.    Categories:.     0: Entity I/O.     1: AI Decisions.     2: Scene Print.     3: Alyx Blind.     4: Log of damage done to player.   5: Player Teleport.     6: Blind Zombie Sounds.         7: Player Continuous. | gamedll |
| create_flashlight |  | gamedll cheat |
| fadeout | fadeout {time r g b}: Fades the screen to black or to the specified color over the given number of seconds. | gamedll cheat |
| fadein | fadein {time r g b}: Fades the screen in from black or from the specified color over the given number of seconds. | gamedll cheat |
| creditsdone |  | gamedll |
| shake | Shake the screen. | gamedll cheat |
| shatterglass_restore |  | gamedll cheat |
| shatterglass_break |  | gamedll cheat |
| dump_globals | Dump all global entities/states | gamedll |
| tv_msg | Send a screen message to all clients. | gamedll |
| global_set | global_set &lt;globalname&gt; &lt;state&gt;: Sets the state of the given env_global (0 = OFF, 1 = ON, 2 = DEAD). | gamedll cheat |
| markup_group_spew | Spew all current markup groups and their members | gamedll cheat |
| markup_group_ent_text | markup_group_ent_text &lt;markup_group name&gt; -&gt; toggle ent_text for all members of the named markup group | gamedll cheat |
| markup_group_ent_bbox | markup_group_ent_bbox &lt;markup_group name&gt; -&gt; toggle ent_bbox for all members of the named markup group | gamedll cheat |
| particle_test_start | Dispatches the test particle system with the parameters specified in particle_test_file,. particle_test_attach_mode and particle_test_attach_param on the entity the player is looking at.. Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| particle_test_stop | Stops all particle systems on the selected entities..        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| particle_test_create | Creates the named particle system where the player is looking..    Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| particle_test_destroy | Destroys all particle systems matching the specified name..       Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| surfaceprop | Reports the surface properties at the cursor | gamedll cheat |
| physics_debug_entity | Dumps debug info for an entity | gamedll |
| phys_mark_debug | Mark object for debug | gamedll cheat |
| phys_shoot | Shoots a phys object. | gamedll cheat |
| prop_physics_create | Creates a physics prop with a specific .vmdl aimed away from where the player is looking..  Arguments: {.vmdl name} | gamedll cheat |
| collect_entity_model_name | Collect model names of the entities you're pointing at | gamedll cheat |
| prop_dynamic_create | Creates a dynamic prop with a specific .vmdl aimed away from where the player is looking..  Arguments: {.vmdl name} | gamedll cheat |
| ent_rotate | Rotates an entity by a specified # of degrees | gamedll cheat |
| ent_characterize | Spew PVS debug info for entity | gamedll |
| sv_querycache_stats | Display status of the query cache (client only) | gamedll |
| scene_playvcd | Play the given VCD as an instanced scripted scene. | gamedll cheat |
| listRecentNPCSpeech | Displays a list of the last 5 lines of speech from NPCs. | gamedll dontrecord |
| scene_flush | Flush all .vcds from the cache and reload from disk. | gamedll |
| report_soundpatch | reports sound patch count | gamedll |
| soundscape_flush | Flushes the server & client side soundscapes | gamedll |
| sv_soundscape_printdebuginfo | print soundscapes | gamedll cheat |
| Test_EHandle |  | gamedll cheat |
| Test_CreateEntity |  | gamedll cheat |
| Test_RandomPlayerPosition |  | gamedll cheat |
| showtriggers_toggle | Displays the movement bounding box for the triggers in orange.  Some entites will also display entity specific overlays..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| showtriggers | Enable or Disable showing trigger entities | gamedll cheat |
| server_game_time | Gives the game time in seconds (server's curtime) | gamedll |
| sv_dev_simulate_gcdown | &lt;state&gt; Turn on/off simulated GC communications failure (GC is down in a way that we know it is down) | gamedll |
| nav_delete | Deletes the currently highlighted Area. | gamedll cheat |
| nav_delete_marked | Deletes the currently marked Area (if any). | gamedll cheat |
| nav_delete_all_hull | Deletes all areas with given hull category. | gamedll cheat |
| script_remove_watch_pattern | Remove a watch from the game debug overlay | gamedll cheat |
| script_add_debug_filter | Add a filter to the game debug overlay | gamedll cheat |
| script_remove_debug_filter | Remove a filter from the game debug overlay | gamedll cheat |
| script_trace_enable | Turn on a particular trace output by file or function name | gamedll cheat |
| script_trace_disable | Turn off a particular trace output by file or function name | gamedll cheat |
| script_trace_enable_key | Turn on a particular trace output by table/instance | gamedll cheat |
| script_trace_disable_key | Turn off a particular trace output by table/instance | gamedll cheat |
| script_trace_enable_all | Turn on all trace output | gamedll cheat |
| script_trace_disable_all | Turn off all trace output | gamedll cheat |
| script_clear_watches | Clear all watches from the game debug overlay | gamedll cheat |
| script_find | Find a key in the VM  | gamedll cheat |
| script_resurrect_unreachable | Use the garbage collector to track down reference cycles | gamedll cheat |
| script_reload_code | Execute a vscript file, replacing existing functions with the functions in the run script | gamedll cheat |
| script_reload_entity_code | Execute all of this entity's VScripts, replacing existing functions with the functions in the run scripts | gamedll cheat |
| script_help | Output help for script functions | gamedll cheat |
| script_help2 | Output help for script functions suitable for auto-completion | gamedll |
| script_dump_all | Dump the state of the VM to the console | gamedll cheat |
| print_mapgroup_sv | Prints the current mapgroup and the contained maps | gamedll release |
| send_round_backup_file_list |  | gamedll hidden release |
| mp_backup_restore_list_files | Lists recent backup round files matching the prefix, most recent files first, accepts a numeric parameter to limit the number of files displayed | gamedll release |
| mp_backup_restore_load_file | Loads player cash, KDA, scores and team scores; resets to the next round after the backup | gamedll release |
| timeout_terrorist_start |  | gamedll |
| timeout_ct_start |  | gamedll |
| mp_warmup_start | Start warmup. | gamedll |
| mp_warmup_end | End warmup immediately. | gamedll |
| endround | End the current round. | gamedll cheat |
| ent_list_report | Reports all list of all entities in a map, one by one | gamedll |
| tv_time_remaining | Print remaining tv broadcast time | gamedll release |
| mp_guardian_emit_bounds_config | mp_guardian_emit_bounds_config | gamedll |
| mp_guardian_add_bounds_pt | mp_guardian_add_bounds_pt | gamedll |
| mp_guardian_shoot_point | mp_guardian_shoot_point | gamedll |
| mp_guardian_clear_all_bounds | mp_guardian_clear_all_bounds | gamedll |
| mp_guardian_new_bounds | mp_guardian_new_bounds | gamedll |
| mp_guardian_bomb_plant_emit_bounds_config | mp_guardian_bomb_plant_emit_bounds_config | gamedll |
| mp_guardian_bomb_plant_add_bounds_pt | mp_guardian_bomb_plant_add_bounds_pt | gamedll |
| mp_guardian_bomb_plant_clear_all_bounds | mp_guardian_bomb_plant_clear_all_bounds | gamedll |
| mp_guardian_bomb_plant_new_bounds | mp_guardian_bomb_plant_new_bounds | gamedll |
| mp_guardian_clear_all_player_spawns | mp_guardian_clear_all_player_spawns | gamedll |
| mp_guardian_add_player_spawn_pt | mp_guardian_add_player_spawn_pt | gamedll |
| mp_dump_timers | Prints round timers to the console for debugging | gamedll |
| mp_debug_timeouts | Prints time outs to the console for debugging | gamedll |
| mp_scrambleteams | Scramble the teams and restart the game | gamedll |
| mp_swapteams | Swap the teams and restart the game | gamedll |
| mp_pause_match | Pause the match in the next freeze time | gamedll |
| mp_unpause_match | Resume the match | gamedll |
| map_showspawnpoints | Shows player spawn points (red=invalid). Optionally pass in the duration. | gamedll |
| map_showbombradius | Shows bomb radius from the center of each bomb site and planted bomb. | gamedll cheat |
| map_setbombradius | Sets the bomb radius for the map. | gamedll cheat |
| sv_game_mode_convars | Display the values of the convars for the current game_mode. | gamedll |
| mapgroup | Specify a map group | gamedll dontrecord |
| sv_throw_decoygrenade | throw decoy grenade with parmas. | developmentonly gamedll cheat |
| sv_throw_molotov | throw molotov grenade with parmas. | developmentonly gamedll cheat |
| sv_throw_smokegrenade | throw smoke grenade with parmas. | developmentonly gamedll cheat |
| sv_rethrow_last_grenade | Emit the last grenade thrown on the server. | gamedll cheat |
| clear_bombs |  | gamedll cheat |
| sv_cs_dump_econ_item_stringtable | sv_cs_dump_econ_item_stringtable | gamedll |
| timeleft | prints the time remaining in the match | gamedll missing4 |
| observer_use |  | gamedll missing4 |
| player_ping | Creates a ping notification where the player is looking. | gamedll missing4 |
| sv_dz_reset_danger_zone |  | gamedll |
| sv_dz_paradrop |  | gamedll |
| dz_shuffle_teams | Shuffle all teams for Danger Zone | gamedll |
| dz_jointeam | dz_jointeam team# [slot#\|name] - Join DZ team N (0 to leave your team).  Server admins can assign other players to teams. | gamedll missing4 |
| dz_clearteams | Clear all DZ teams | gamedll |
| survival_check_num_possible_final_zone | print out a number of all possible final zone | gamedll |
| rr_reloadresponsesystems | Reload all response system scripts. | gamedll cheat |
| rr_findrules | Search and list rules by substring. | gamedll |
| rr_findrules_verbose | Search and list rules by substring. | gamedll |
| animevents_dump | List all the currently registered anim events.. | gamedll cheat |
| ent_animgraph_debug | Displays debug draws about the given entity(ies) animgraph. Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| mp_disable_autokick | Prevents a userid from being auto-kicked | gamedll |
| givecurrentammo | Give a supply of ammo for current weapon... | gamedll cheat |
| prop_debug | Toggle prop debug mode. If on, props will show colorcoded bounding boxes. Red means ignore all damage. White means respond physically to damage but never break. Green maps health in the range of 100 down to 1. | gamedll cheat |
| debugoverlay_toggle | Toggles visibility of the debug overlay system. | gamedll cheat |
| debugoverlay_cycle_domain | Toggles visibility of the debug overlay system. | gamedll cheat |
| debugoverlay_cycle_state | Toggles visibility of the debug overlay system. | gamedll cheat |
| debugoverlay_hide_imgui | Hides the overlay. | gamedll cheat |
| imgui_set_selection | Sets ImGui selection | gamedll cheat |
| imgui_set_status_text | Sets ImGui header status text | gamedll cheat |
| save_set_subdirectory |  | gamedll replicated |
| save_clear_subdirectory |  | gamedll replicated |
| save | Save Game | gamedll dontrecord |
| autosavedangerous | AutoSaveDangerous | gamedll |
| autosave | Autosave | gamedll |
| autosavedangerousissafe |  | gamedll |
| save_finish_async |  | gamedll |
| save_showelapsedtime | display up-to-date elapsed play time | gamedll |
| save_watchclass | Restrict spew to entities with matching classname | gamedll |
| save_watchentity | Restrict spew to entity index | gamedll |
| report_entities | Lists all entities | developmentonly gamedll cheat |
| ents | List server entities, sorted by spawn group | gamedll |
| ent_spew_derived_classes | Prints out all entity classes which inherit from a specified base class | developmentonly gamedll |
| net_reloadgameevents | Reload the game events | developmentonly gamedll |
| gameevents_dumptofile | write gameevents keyvalues (sorted by name) to gameevents_&lt;modname&gt;.txt | developmentonly gamedll |
| gameevents_analyze | compare game events across all mods | developmentonly gamedll |
| ent_debug_origin_changes | turn on, off, or toggle origin changes on server for entity by index | developmentonly gamedll |
| _resetgamestats | Erases current game stats and writes out a blank stats file | gamedll |
| ent_viewentity | Selects the picked entity as the view entity | developmentonly gamedll |
| ent_viewpunch | Used to debug ViewPunch | developmentonly gamedll |
| in_forcebuttonstate | Forces a button to be a particular state - WHEN PROCESSING USERCOMMANDS | developmentonly gamedll vconsole_fuzzy_matching |
| sv_load_forced_client_names_file | Loads a file containing SteamID64 names for clients | gamedll release |
| sv_load_random_client_names_file | Loads a file containing random name words for clients | gamedll release |
| host_workshop_map | Get the latest version of the map and host it on this server. | gamedll |
| host_workshop_collection | Host a workshop map collection as a mapgroup | gamedll |
| buyrandom | Buy random primary and secondary. Primarily for deathmatch where cost is not an issue. | gamedll missing4 |
| traceattack | traceattack damage hitgroup | gamedll |
| CreatePredictionError | Create a prediction error | gamedll cheat |
| listissues | List all the issues that can be voted on. | gamedll missing4 |
| callvote | Start a vote on an issue. | gamedll missing4 |
| server_snd_cast | Casts a ray and starts a sound event where the ray hits. The sound event will retrigger periodically. Usage: snd_cast &lt;eventname&gt; [&lt;retrigger time&gt;] [&lt;max distance&gt;]. Arguments that are specified will become defaults for the remainder of the session. | gamedll cheat |
| mp_bot_ai_bt_clear_cache | Clears the cache for behavior tree files. | gamedll release |
| bot_place | bot_place - Places a bot from the map at where the local player is pointing. | gamedll cheat |
| bot_add | bot_add &lt;t\|ct&gt; &lt;type&gt; &lt;difficulty&gt; &lt;name&gt; - Adds a bot matching the given criteria. | gamedll |
| bot_add_t | bot_add_t &lt;type&gt; &lt;difficulty&gt; &lt;name&gt; - Adds a terrorist bot matching the given criteria. | gamedll |
| bot_add_ct | bot_add_ct &lt;type&gt; &lt;difficulty&gt; &lt;name&gt; - Adds a Counter-Terrorist bot matching the given criteria. | gamedll |
| bot_kill | bot_kill &lt;all&gt; &lt;t\|ct&gt; &lt;type&gt; &lt;difficulty&gt; &lt;name&gt; - Kills a specific bot, or all bots, matching the given criteria. | gamedll cheat |
| bot_kick | bot_kick &lt;all&gt; &lt;t\|ct&gt; &lt;type&gt; &lt;difficulty&gt; &lt;name&gt; - Kicks a specific bot, or all bots, matching the given criteria. | gamedll |
| bot_knives_only | Restricts the bots to only using knives | gamedll |
| bot_pistols_only | Restricts the bots to only using pistols | gamedll |
| bot_snipers_only | Restricts the bots to only using sniper rifles | gamedll |
| bot_all_weapons | Allows the bots to use all weapons | gamedll |
| bot_goto_mark | Sends a bot to the marked nav area (useful for testing navigation meshes) | gamedll cheat |
| bot_goto_selected | Sends a bot to the selected nav area (useful for testing navigation meshes) | gamedll cheat |
| nav_check_connectivity | Checks to be sure every (or just the marked) nav area can get to every goal area for the map (hostages or bomb site). | gamedll cheat |
| nav_precise | Toggles the 'dont avoid obstacles' flag used by the AI system. | gamedll cheat |
| dm_reset_spawns |  | gamedll |
| sv_throw_flashgrenade | throw flash grenade with parmas. | developmentonly gamedll cheat |
| sv_throw_hegrenade | throw HEgrenade with parmas. | developmentonly gamedll cheat |
| ent_text_filter | Set which ent_text filters you want:  | gamedll cheat |
| ent_setpos | Move entity to position | gamedll cheat missing4 |
| ent_setang | Set entity angles | gamedll cheat missing4 |
| ent_call | ent_call &lt;funcname&gt; &lt;option:entname&gt; calls function on current look target or filtername, checks on ent, then root, then mode, then map scope | gamedll cheat |
| ent_script_dump | Dumps the names and values of this entity's script scope to the console.        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_setname | Sets the targetname of the given entity(s). Arguments:      &lt;new entity name&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | gamedll cheat |
| ent_find | Find and list all entities with classnames or targetnames that contain the specified substring..Format: find_ent &lt;substring&gt;. | gamedll cheat |
| ent_find_index | Display data for entity matching specified index..Format: find_ent_index &lt;index&gt;. | gamedll cheat |
| dump_animgraph_list | Displays stats about which animations are updating | developmentonly gamedll |
| anim_eval_stats | Displays stats about how many EvaluatePose calls are unused | developmentonly gamedll |
| ent_grab | grabs the object in front of the player. Options: -loose -multiple -toggle | gamedll cheat |
| ent_ungrab | un-grabs all objects | gamedll cheat |
| ent_name | Displays the entity name | gamedll cheat |
| ent_actornames | Displays the entity name for all entities that have ShouldDisplayInActorNames true in code | gamedll cheat |
 | undefined |isplays text debugging information about the given entity(ies) on top of the entity (See Overlay Text).
|         Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | undefined |eat
| ent_text_radius | Displays text debugging information about the given entity(ies) [near the player] on top of the entity (See Overlay Text).      2 Arguments:    &lt;Radius&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | gamedll cheat |
| ent_text256 | Displays text debugging information about the given entity(ies) [within 256 units of the player] on top of the entity (See Overlay Text).   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
 | undefined |ar | Hide text debugging information about the given entity(ies) on top of the entity (See Overlay Text).
|         Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | undefined |eat
| ent_text_sticky_add | Adds to list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).    Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_text_sticky_remove | Removes from the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_text_sticky_clear | Clears the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).       Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_text_sticky_dump | Spews the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text). Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_bbox | Displays the movement bounding box for the given entity(ies) in orange.  Some entites will also display entity specific overlays..     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_absbox | Displays the total bounding box for the given entity(s) in green.  Some entites will also display entity specific overlays.. Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_attachments | Displays the attachment points on an entity..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_joints | Displays the joint names + axes an entity..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_viewoffset | Displays the eye position for the given entity(ies) in red..     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_pivot | Displays the pivot for the given entity(ies)..        (y=up=green, z=forward=blue, x=left=red). .     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_skeleton | Displays the skeleton for the given entity(ies)..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_hitbox | Displays the hitboxes for the given entity(ies)..    Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_vcollide_wireframe | Displays the interpolated vcollide wireframe pm am entity..      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_select | Select or deselects the given entities(s) for later manipulation.    Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_messages | Toggles input/output message display for the selected entity(ies).  The name of the entity will be displayed as well as any messages that it sends or receives..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_picker | Toggles 'picker' mode.  When picker is on, the bounding box, pivot and debugging text is displayed for whatever entity the player is looking at..    Arguments:      full - enables all debug information | gamedll cheat |
| ent_show_damage | Sets damage display mode.  When on, you will see the amount of damage dealt over the target's head. | gamedll cheat |
| ent_clear_debug_overlays | Clears all debug overlays | gamedll cheat |
| ent_scale | Scales entities.      Arguments: &lt;scale factor&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | gamedll cheat |
| ent_remove | Removes the given entity(s). Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_remove_all | Removes all entities of the specified type.      Arguments:      {entity_name} / {class_name}  | gamedll cheat |
| ent_kill | Kills the given entity(s).     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| ent_animgraph_setvar | Sets a variable on the animgraph of the given entity(s).   Arguments:   &lt;varname&gt;=&lt;value&gt;  &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | gamedll cheat |
| ent_animgraph_record | Toggles recording of animgraph replay of the given entity(s).      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | gamedll cheat |
| save_animgraph_recording | Saves all active animgraph recordings to disk | gamedll cheat |
| drawline | Draws line between two 3D Points..     Green if no collision.  Red is collides with something. Arguments: x1 y1 z1 x2 y2 z2 | gamedll cheat |
| drawcross | Draws a cross at the given location.  Arguments: x y z | gamedll cheat |
| box | Draw a bbox.        Arguments:  minx miny miny maxx maxy maxz &lt;lifetime = 10.0&gt; &lt;r g b a&gt;. | gamedll cheat |
| axis | Draw an axis.      Arguments:  x y z pitch yaw roll &lt;lifetime = 10.0&gt; &lt;r g b a&gt;. | gamedll cheat |
| ent_hierarchy | Prints the entity hierarchy tree rooted at the specified ent(s) | gamedll cheat |
| ent_scenehierarchy | Prints the entity scenenode hierarchy tree rooted at the specified ent(s) | gamedll cheat |
| phys_dump_intersection_controller | Dump intersection controller status | gamedll |
| phys_list | List all physics component contents of every entity in the game;.    -stream [1\|0] : initiate\|terminate streaming to physics debugger.    -allents: include non-physical entities.    -classes: print class names.    -sdk    : Rubikon build.    -world  : current state of the world.    -world -touch: list body pairs (bodies in contact).    -world -save &lt;name&gt;: save world to a file.    -world -mem: memory dump.    -world -snapshots: Start/Stop dumping snapshots of the world into the current directory.    -world -profiletraces: ProfileRecordedTraces.    -world -agg: current aggregate data registry (loaded resources). | gamedll |
| phys_sleep | Put all physics in all the worlds to sleep | gamedll |
| phys_wakeup | Wake all physics objects in the Main physics up | gamedll |
| ray_bench | Load the rays and run the benchmark | gamedll |
| physics_highlight_active | Turns on the absbox for all active physics objects..  0 : un-highlight.. | gamedll |
| physics_report_active | Lists all active physics objects.  -more : extra info. | gamedll |
| physics_add_test | add test object | gamedll |
| physics_remove_test | remove test object | gamedll |
| phys_create_test_character_proxy | Create test character proxy | gamedll |
| test_list_entities | test-list entities | gamedll cheat |
| report_simthinklist | Lists all simulating/thinking entities | developmentonly gamedll |
| snd_sos_sv_soundevent_start | Test | gamedll |
| snd_sos_sv_soundevent_stop_last | Test | gamedll |
| snd_sos_sv_test_gender | Test | gamedll |
| snd_sos_sv_soundevent_pause_last | Test | gamedll |
| snd_sos_sv_soundevent_unpause_last | Test | gamedll |
| script_reload | Reload scripts | gamedll cheat |
| script_attach_debugger | Connect the vscript VM to the script debugger | gamedll cheat |
| script_debug | Toggle the in-game script debug features | gamedll cheat |
| script_add_watch | Add a watch to the game debug overlay | gamedll cheat |
| script_remove_watch | Remove a watch from the game debug overlay | gamedll cheat |
| script_add_watch_pattern | Add a watch to the game debug overlay | gamedll cheat |
| cc_emit | Emits a closed caption | clientdll |
| cc_random | Emits a random caption | clientdll |
| cc_flush | Flushes async'd captions. | clientdll |
| cc_showblocks | Toggles showing which blocks are pending/loaded async. | clientdll |
| cc_findsound | Searches for soundname which emits specified text. | clientdll |
| buymenu | Show or hide main buy menu | clientdll server_can_execute |
| autobuy | Attempt to purchase items with the order listed in cl_autobuy | clientdll clientcmd_can_execute |
| rebuy | Attempt to repurchase items with the order listed in cl_rebuy | clientdll clientcmd_can_execute |
| teammenu | Show team selection window | clientdll server_can_execute |
| dm_togglerandomweapons | Turns random weapons in deathmatch on/off | clientdll server_can_execute clientcmd_can_execute |
| mat_reloadwearablecustommaterials | Reloads wearable custom materials for the local player | developmentonly clientdll cheat |
| cl_dev_decaltrace_blood | Shoot out a decal spray that shoots blood. | developmentonly clientdll cheat |
| +lookatweapon |  | clientdll |
| -lookatweapon |  | clientdll |
| show_loadout_toggle | Toggles loadout display | clientdll clientcmd_can_execute |
| cl_sos_test_set_opvar |  | clientdll cheat |
| cl_sos_test_get_opvar |  | clientdll cheat |
| toggleRdrOpt |  | developmentonly clientdll |
| cl_steamscreenshots | Enable/disable saving screenshots to Steam | clientdll |
| error_message_explain_vac | Take user to Steam support article | hidden clientdll clientcmd_can_execute |
| error_message_explain_pure | Take user to Steam support article | hidden clientdll clientcmd_can_execute |
| error_message_explain_unsigned | Take user to Steam support article | hidden clientdll clientcmd_can_execute |
| restart_normal | Restart | hidden clientdll clientcmd_can_execute |
| restart_in_insecure | Restart in insecure mode | hidden clientdll clientcmd_can_execute |
| show_untrusted_warning_again | Show untrusted warning again | hidden clientdll clientcmd_can_execute |
| restart_in_trusted | Restart in trusted mode | hidden clientdll clientcmd_can_execute |
| restart_in_untrusted | Restart in untrusted mode | hidden clientdll clientcmd_can_execute |
| mm_queue_show_stats | Display global server stats | clientdll clientcmd_can_execute |
| clutch_mode_toggle | Toggle clutch mode convar | clientdll release |
| csgo_launch_workshop_map | Launch a workshop map | clientdll vconsole_fuzzy_matching vconsole_set_focus |
| ShowSteamStatsSessionID | Prints out the game stats session ID's (developer convar must be set to non-zero). | developmentonly clientdll |
| refresh_ui_audio_state | Restores audio DSP state for the UI. | clientdll cheat |
| confirm_join_new_session_exit_current | Confirm that we wish to join a new session, destroying a previous session | hidden clientdll clientcmd_can_execute |
| cl_avatar_convert_rgb | Converts all png avatars in the avatars directory to rgb | clientdll cheat release |
| cl_avatar_convert_png | Converts all rgb avatars in the avatars directory to png | clientdll cheat release |
| drawoverviewmap | Draws the overview map | clientdll |
| hideoverviewmap | Hides the overview map | clientdll |
| +quickbuyradial |  | clientdll |
| -quickbuyradial |  | clientdll |
| +quickgrenaderadial |  | clientdll |
| -quickgrenaderadial |  | clientdll |
| +quickinv |  | clientdll |
| -quickinv |  | clientdll |
| +quickgearradial |  | clientdll |
| -quickgearradial |  | clientdll |
| +radialradio |  | clientdll |
| -radialradio |  | clientdll |
| +radialradio2 |  | clientdll |
| -radialradio2 |  | clientdll |
| +radialradio3 |  | clientdll |
| -radialradio3 |  | clientdll |
| map_enable_background_maps | Enables/disables portrait background maps | clientdll cheat |
| csgo_video_settings_restore_previous | csgo_video_settings_restore_previous | clientdll release |
| drawradar | Draws HUD radar | clientdll |
| hideradar | Hides HUD radar | clientdll |
| cl_reload_hud | Reloads the hud scale and resets scale and borders | clientdll |
| +cl_show_team_equipment |  | clientdll |
| -cl_show_team_equipment |  | clientdll |
| +spray_menu |  | clientdll |
| -spray_menu |  | clientdll |
| voice_status_test_toggle | Test voice and status notices | developmentonly clientdll |
| cl_mainmenu_show_blog | Show the blog and hide news panel | hidden clientdll clientcmd_can_execute |
| cl_mainmenu_hide_blog | Show the news panel and hide blog | hidden clientdll clientcmd_can_execute |
| confirm_abandon_match | Confirm that we wish to abandon match | hidden clientdll clientcmd_can_execute |
| confirm_join_friend_session_exit_current | Confirm that we wish to join a friend session, destroying a previous session | hidden clientdll clientcmd_can_execute |
| csgo_watch_friend_session_exit_current |  | hidden clientdll clientcmd_can_execute |
| confirm_watch_friend_session_exit_current | Confirm that we wish to watch a friend session, destroying a previous session | hidden clientdll clientcmd_can_execute |
| voice_modenable_toggle | Toggle the voice_modenable convar. | clientdll |
| localization_quest_item_string_printout | localization_quest_item_string_printout | clientdll |
| csgo_econ_action_preview | Preview an economy item | hidden clientdll dontrecord clientcmd_can_execute |
| launch_warmup_map | Launches warmup map | clientdll dontrecord clientcmd_can_execute |
| matchdraft_debug_sendlog | Print debug draft into HTTP log | hidden clientdll dontrecord release clientcmd_can_execute |
| mm_queue_draft_show | Display current draft | hidden clientdll clientcmd_can_execute |
| csgo_download_match | Downloads a match via serial code and starts playback | clientdll dontrecord clientcmd_can_execute |
| cl_matchstats_print_own_data | cl_matchstats_print_own_data RANGENAME | clientdll |
| gcmd | Generate a command | hidden clientdll clientcmd_can_execute |
| confirm_join_party_session_exit_current | Confirm that we wish to join a party session, destroying a previous session | hidden clientdll clientcmd_can_execute |
| confirm_activate_itemid_now | Confirm item activation by item id | hidden clientdll clientcmd_can_execute |
| reload_store_config |  | clientdll |
| confirm_purchase_item_def_now | Confirm item purchase | hidden clientdll clientcmd_can_execute |
| cl_sim_grenade_trajectory | Draw trajectory of the deployed grenade if thrown from this position. Takes an optional parameter for how long the drawn trajectory will last. | clientdll cheat |
| apply_crosshair_code | Apply a crosshair code to the current crosshair settings. | clientdll |
| perfectworld_replenish_funds | Opens Perfect World funds replenishment page for account. | hidden clientdll clientcmd_can_execute |
| debug_purchase_defidx | Purchase an item by defindex | clientdll release clientcmd_can_execute |
| cl_quest_schedule_print | cl_quest_schedule_print | clientdll |
| cl_quest_events_print | cl_quest_events_print | clientdll |
| econ_show_items_with_tag | Lists the item definitions that have a specified tag. | clientdll |
| econ_build_pinboard_images_from_collection_name | Renders and saves images for all models in a collection. | clientdll |
| dev_simulate_gcdown | &lt;state&gt; Turn on/off simulated GC communications failure (GC is down in a way that we know it is down) | clientdll |
| slot11 |  | clientdll server_can_execute |
| slot12 |  | clientdll server_can_execute |
| slot13 |  | clientdll server_can_execute |
| radio | Opens a radio menu | clientdll |
| radio1 | Opens a radio menu | clientdll |
| radio2 | Opens a radio menu | clientdll |
| radio3 | Opens a radio menu | clientdll |
| menuselect | menuselect | clientdll clientcmd_can_execute |
| cl_report_predcopy_overrides | Report prediction copy overrides | clientdll |
| print_mapgroup | Prints the current mapgroup and the contained maps | clientdll release |
| cl_game_mode_convars | Display the values of the convars for the current game_mode. | clientdll |
| regenerate_weapon_skins |  | clientdll cheat |
| cl_cs_dump_econ_item_stringtable | cl_cs_dump_econ_item_stringtable | clientdll |
| econ_clear_inventory_images | clear the local inventory images (they will regenerate) | clientdll |
| endmatch_votenextmap | Votes for the next map at the end of the match | clientdll clientcmd_can_execute |
| cl_rr_reloadresponsesystems | Reload all response system scripts. | clientdll cheat |
| cl_rr_findrules | Search and list rules by substring. | clientdll |
| cl_rr_findrules_verbose | Search and list rules by substring. | clientdll |
| cl_ent_animgraph_debug | Displays debug draws about the given entity(ies) animgraph.      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_prop_debug | Toggle prop debug mode. If on, props will show colorcoded bounding boxes. Red means ignore all damage. White means respond physically to damage but never break. Green maps health in the range of 100 down to 1. | clientdll cheat |
| cl_debugoverlay_toggle | Toggles visibility of the debug overlay system. | clientdll cheat |
| cl_debugoverlay_cycle_domain | Toggles visibility of the debug overlay system. | clientdll cheat |
| cl_debugoverlay_cycle_state | Toggles visibility of the debug overlay system. | clientdll cheat |
| cl_debugoverlay_hide_imgui | Hides the overlay. | clientdll cheat |
| cl_imgui_set_selection | Sets ImGui selection | clientdll cheat |
| cl_imgui_set_status_text | Sets ImGui header status text | clientdll cheat |
| game_particle_manager_dump_requeue | Dump contents of particle manager requeue | developmentonly clientdll |
| game_particle_manager_list_active | Dump counts of active particles | developmentonly clientdll |
| url_execute | Executes url-based commands, used for incoming commands from url-based launches when the game's already running. | clientdll |
| cl_report_entities | Lists all entities | developmentonly clientdll cheat |
| cl_ents | List client entities, sorted by spawn group | clientdll |
| cl_ent_spew_derived_classes | Prints out all entity classes which inherit from a specified base class | developmentonly clientdll |
| soundscape_dumpclient | Dumps the client's soundscape data.. | clientdll cheat |
| cl_in_forcebuttonstate | Forces a button to be a particular state - WHEN PROCESSING USERCOMMANDS | developmentonly clientdll vconsole_fuzzy_matching |
| cl_record_bone_setup_stats | generate bone setup statistics | developmentonly clientdll |
| cl_updatevisibility | Updates visibility bits. | clientdll |
| ic | interp entity count. | clientdll |
| dlight_debug | Creates a dlight in front of the player | clientdll cheat |
| cl_removedecals | Remove the decals from the entity under the crosshair. | clientdll cheat |
| iv_debug | Spew interpolated var info for entity. | clientdll |
| iv_interp | Spew interpolated var info for entity. | clientdll |
| iv_on | Spew both interpolated var debug info and history for entity. | clientdll |
| iv_off | Turn off all interpolation variable spew. | clientdll |
| dump_entity_report | List all entities in the scene | clientdll cheat |
| cl_dump_projected_texture_count | Print out number of active projected textures | clientdll |
| gameinstructor_reload_lessons | Shuts down all open lessons and reloads them from the script file. | clientdll |
| gameinstructor_reset_counts | Resets all display and success counts to zero. | developmentonly clientdll |
| gameinstructor_dump_open_lessons | Gives a list of all currently open lessons. | clientdll cheat |
| gameinstructor_dump_run_lesson_counts | Gives a list of lessons that been completed or shown | clientdll cheat |
| gameinstructor_teach_lesson | Force a specific lesson to be triggered | clientdll |
| p2p_ping | Ping a peer. | clientdll |
| servervoice_dump | servervoice_dump | clientdll |
| servervoice_clear | servervoice_clear | clientdll |
| cl_soundscape_flush | Flushes the client side soundscapes | clientdll cheat server_can_execute |
| playsoundscape | Forces a soundscape to play | clientdll cheat |
| stopsoundscape | Stops all soundscape processing and fades current looping sounds | clientdll cheat |
| cl_soundscape_printdebuginfo | print soundscapes | clientdll |
| cl_ss_origin | print origin in script format | clientdll |
| camerazoomin |  | clientdll |
| camerazoomout |  | clientdll |
| cl_dumpsplithacks | Dump split screen workarounds. | clientdll |
| convert_steamid | Convert SteamID into multiple formats | clientdll |
| cl_showents | Dump entity list to console. | clientdll cheat |
| cl_printfps | Print information from cl_showfps. | clientdll |
| cl_resetfps | Reset information from cl_showfps. | clientdll |
| ss_teleport | Teleport other splitscreen player to my location. | developmentonly clientdll cheat |
| impulse | Triggers impulse command | clientdll |
| in_forceinput | Forces a button to be a particular state -- WHEN SAMPLING INPUT | developmentonly clientdll vconsole_fuzzy_matching |
| cam_command | Tells camera to change modes | clientdll cheat |
| thirdperson | Switch to thirdperson camera. | clientdll cheat execute_per_tick |
| firstperson | Switch to firstperson camera. | clientdll execute_per_tick |
| thirdperson_mayamode | Switch to thirdperson Maya-like camera controls. | clientdll cheat |
| thirdpersonshoulder | Switch to thirdperson-shoulder camera. | clientdll |
| camortho | Switch to orthographic camera. | clientdll cheat |
| +cammousemove |  | clientdll |
| -cammousemove |  | clientdll |
| +camdistance |  | clientdll |
| -camdistance |  | clientdll |
| snapto |  | clientdll |
| hud_reloadscheme | Reloads hud layout and animation scripts. | clientdll |
| cl_tree_sway_dir | sets tree sway wind direction and strength | clientdll |
| cl_particles_dump_effects |  | clientdll |
| cl_destroy_ragdolls | Destroys all client-side ragdolls | clientdll |
| hmd_anchor_rotate |  | clientdll |
| cl_querycache_stats | Display status of the query cache (client only) | clientdll cheat |
| cl_report_soundpatch | reports client-side sound patch count | clientdll |
| spec_pos | dump position and angles to the console | clientdll |
| getpos | dump position and angles to the console | clientdll |
| getpos_exact | dump origin and angles to the console | clientdll |
| shake_stop | Stops all active screen shakes.. | clientdll cheat |
| shake_testpunch | Test a punch-style screen shake.. | clientdll cheat |
| slot1 |  | clientdll server_can_execute |
| slot2 |  | clientdll server_can_execute |
| slot3 |  | clientdll server_can_execute |
| slot4 |  | clientdll server_can_execute |
| slot5 |  | clientdll server_can_execute |
| slot6 |  | clientdll server_can_execute |
| slot7 |  | clientdll server_can_execute |
| slot8 |  | clientdll server_can_execute |
| slot9 |  | clientdll server_can_execute |
| slot0 |  | clientdll server_can_execute |
| slot10 |  | clientdll server_can_execute |
| cancelselect |  | clientdll server_can_execute |
| invnext |  | clientdll server_can_execute |
| invprev |  | clientdll server_can_execute |
| lastinv |  | clientdll server_can_execute |
| invnextselect |  | clientdll server_can_execute |
| invprevselect |  | clientdll server_can_execute |
| cl_ent_text_filter | Set which ent_text filters you want:  | clientdll cheat |
| cl_ent_setpos | Move entity to position | clientdll cheat missing4 |
| cl_ent_setang | Set entity angles | clientdll cheat missing4 |
| cl_ent_call | ent_call &lt;funcname&gt; &lt;option:entname&gt; calls function on current look target or filtername, checks on ent, then root, then mode, then map scope | clientdll cheat |
| cl_ent_script_dump | Dumps the names and values of this entity's script scope to the console.     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_setname | Sets the targetname of the given entity(s).      Arguments:      &lt;new entity name&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | clientdll cheat |
| cl_ent_find | Find and list all entities with classnames or targetnames that contain the specified substring..Format: find_ent &lt;substring&gt;. | clientdll cheat |
| cl_ent_find_index | Display data for entity matching specified index..Format: find_ent_index &lt;index&gt;. | clientdll cheat |
| buildcubemaps | Build Cubemaps | clientdll |
| capturecubemap | Capture Cubemap | clientdll |
| cl_dump_animgraph_list | Displays stats about which animations are updating | developmentonly clientdll |
| cl_anim_eval_stats | Displays stats about how many EvaluatePose calls are unused | developmentonly clientdll |
| cl_ent_grab | grabs the object in front of the player. Options: -loose -multiple -toggle | clientdll cheat |
| cl_ent_ungrab | un-grabs all objects | clientdll cheat |
| cl_ent_name | Displays the entity name | clientdll cheat |
| cl_ent_actornames | Displays the entity name for all entities that have ShouldDisplayInActorNames true in code | clientdll cheat |
 | undefined || Displays text debugging information about the given entity(ies) on top of the entity (See Overlay Text).
|         Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | undefined |cheat
| cl_ent_text_radius | Displays text debugging information about the given entity(ies) [near the player] on top of the entity (See Overlay Text).   2 Arguments:    &lt;Radius&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | clientdll cheat |
| cl_ent_text256 | Displays text debugging information about the given entity(ies) [within 256 units of the player] on top of the entity (See Overlay Text).        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_text_clear | Hide text debugging information about the given entity(ies) on top of the entity (See Overlay Text | undefined |
|         Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | undefined |cheat
| cl_ent_text_sticky_add | Adds to list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text). Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_text_sticky_remove | Removes from the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_text_sticky_clear | Clears the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).    Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_text_sticky_dump | Spews the list of names to display text debugging information about the given entity(ies) on top of the entity (See Overlay Text).      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_bbox | Displays the movement bounding box for the given entity(ies) in orange.  Some entites will also display entity specific overlays..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_absbox | Displays the total bounding box for the given entity(s) in green.  Some entites will also display entity specific overlays..      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_attachments | Displays the attachment points on an entity..        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_joints | Displays the joint names + axes an entity..       Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_viewoffset | Displays the eye position for the given entity(ies) in red..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_pivot | Displays the pivot for the given entity(ies)..     (y=up=green, z=forward=blue, x=left=red). .     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_skeleton | Displays the skeleton for the given entity(ies)..       Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_hitbox | Displays the hitboxes for the given entity(ies).. Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_vcollide_wireframe | Displays the interpolated vcollide wireframe pm am entity..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_select | Select or deselects the given entities(s) for later manipulation. Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_messages | Toggles input/output message display for the selected entity(ies).  The name of the entity will be displayed as well as any messages that it sends or receives..        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_picker | Toggles 'picker' mode.  When picker is on, the bounding box, pivot and debugging text is displayed for whatever entity the player is looking at.. Arguments:      full - enables all debug information | clientdll cheat |
| cl_ent_show_damage | Sets damage display mode.  When on, you will see the amount of damage dealt over the target's head. | clientdll cheat |
| cl_ent_clear_debug_overlays | Clears all debug overlays | clientdll cheat |
| cl_ent_scale | Scales entities.   Arguments: &lt;scale factor&gt; &lt;{entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at}&gt; | clientdll cheat |
| cl_ent_remove | Removes the given entity(s).      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_ent_remove_all | Removes all entities of the specified type.   Arguments:      {entity_name} / {class_name}  | clientdll cheat |
| cl_ent_animgraph_record | Toggles recording of animgraph replay of the given entity(s).   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cl_save_animgraph_recording | Saves all active animgraph recordings to disk | clientdll cheat |
| cl_drawline | Draws line between two 3D Points..  Green if no collision.  Red is collides with something. Arguments: x1 y1 z1 x2 y2 z2 | clientdll cheat |
| cl_drawcross | Draws a cross at the given location.       Arguments: x y z | clientdll cheat |
| cl_box | Draw a bbox.     Arguments:  minx miny miny maxx maxy maxz &lt;lifetime = 10.0&gt; &lt;r g b a&gt;. | clientdll cheat |
| cl_axis | Draw an axis.   Arguments:  x y z pitch yaw roll &lt;lifetime = 10.0&gt; &lt;r g b a&gt;. | clientdll cheat |
| ent_rbox | Displays the total bounding box for the given entity(s) in green.  Some entites will also display entity specific overlays..   Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cli_ent_pivot | Displays the interpolated pivot for the given entity(ies)..       (y=up=green, z=forward=blue, x=left=red). .     Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cli_ent_skeleton | Displays the skeleton for the given entity(ies)..      Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cli_ent_hitbox | Displays the skeleton for the given entity(ies)..        Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cli_ent_attachments | Displays the interpolated attachment points on an entity..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| cli_ent_vcollide_wireframe | Displays the interpolated vcollide wireframe pm am entity..  Arguments:      {entity_name} / {class_name} / {entity_index} / {no argument = pick what player is looking at} | clientdll cheat |
| ent_debug_anim | Use the specified entity for animation debugging. | clientdll |
| cl_dumpentity | Dumps info about an entity | clientdll cheat |
| cl_ent_hierarchy | Prints the entity hierarchy tree rooted at the specified ent(s) | clientdll cheat |
| cl_ent_scenehierarchy | Prints the entity scenenode hierarchy tree rooted at the specified ent(s) | clientdll cheat |
| cl_phys_dump_intersection_controller | Dump intersection controller status | clientdll |
| cl_phys_list | List all physics component contents of every entity in the game;.    -stream [1\|0] : initiate\|terminate streaming to physics debugger.    -allents: include non-physical entities.    -classes: print class names.    -sdk    : Rubikon build.    -world  : current state of the world.    -world -touch: list body pairs (bodies in contact).    -world -save &lt;name&gt;: save world to a file.    -world -mem: memory dump.    -world -snapshots: Start/Stop dumping snapshots of the world into the current directory.    -world -profiletraces: ProfileRecordedTraces.    -world -agg: current aggregate data registry (loaded resources). | clientdll |
| cl_phys_sleep | Put all physics in all the worlds to sleep | clientdll |
| cl_phys_wakeup | Wake all physics objects in the Main physics up | clientdll |
| cl_physics_highlight_active | Turns on the absbox for all active physics objects..  0 : un-highlight.. | clientdll |
| cl_physics_report_active | Lists all active physics objects.  -more : extra info. | clientdll |
| cl_physics_add_test | add test object | clientdll |
| cl_physics_remove_test | remove test object | clientdll |
| cl_phys_create_test_character_proxy | Create test character proxy | clientdll |
| dump_secondary_scene_worlds | Lists secondary scene worlds and ref counts | clientdll |
| cl_test_list_entities | test-list entities | clientdll cheat |
| cl_report_simthinklist | Lists all simulating/thinking entities | developmentonly clientdll |
| snd_sos_cl_soundevent_start | Test | clientdll |
| snd_sos_cl_soundevent_stop_last | Test | clientdll |
| snd_sos_cl_soundevent_pause_last | Test | clientdll |
| snd_sos_cl_soundevent_unpause_last | Test | clientdll |
| cl_script_reload | Reload scripts | clientdll cheat |
| cl_script_attach_debugger | Connect the vscript VM to the script debugger | clientdll cheat |
| cl_script_debug | Toggle the in-game script debug features | clientdll cheat |
| cl_script_add_watch | Add a watch to the game debug overlay | clientdll cheat |
| cl_script_remove_watch | Remove a watch from the game debug overlay | clientdll cheat |
| cl_script_add_watch_pattern | Add a watch to the game debug overlay | clientdll cheat |
| cl_script_remove_watch_pattern | Remove a watch from the game debug overlay | clientdll cheat |
| cl_script_add_debug_filter | Add a filter to the game debug overlay | clientdll cheat |
| cl_script_remove_debug_filter | Remove a filter from the game debug overlay | clientdll cheat |
| cl_script_trace_enable | Turn on a particular trace output by file or function name | clientdll cheat |
| cl_script_trace_disable | Turn off a particular trace output by file or function name | clientdll cheat |
| cl_script_trace_enable_key | Turn on a particular trace output by table/instance | clientdll cheat |
| cl_script_trace_disable_key | Turn off a particular trace output by table/instance | clientdll cheat |
| cl_script_trace_enable_all | Turn on all trace output | clientdll cheat |
| cl_script_trace_disable_all | Turn off all trace output | clientdll cheat |
| cl_script_clear_watches | Clear all watches from the game debug overlay | clientdll cheat |
| cl_script_find | Find a key in the VM  | clientdll cheat |
| cl_script_resurrect_unreachable | Use the garbage collector to track down reference cycles | clientdll cheat |
| cl_script_reload_code | Execute a vscript file, replacing existing functions with the functions in the run script | clientdll cheat |
| cl_script_reload_entity_code | Execute all of this entity's VScripts, replacing existing functions with the functions in the run scripts | clientdll cheat |
| cl_script_help | Output help for script functions | clientdll cheat |
| cl_script_help2 | Output help for script functions suitable for auto-completion | clientdll |
| cl_script_dump_all | Dump the state of the VM to the console | clientdll cheat |
| cl_pred_track | &lt;entindex&gt; &lt;fieldname&gt;:  Track changes to entity index entindex, for field fieldname. | clientdll |
| cl_pred_track_off | clear field track changes. | clientdll |
| cl_predictioncopy_describe | Describe datamap_t for entindex | clientdll |
| cl_predictioncopy_print | Print simple description of prediction copy fields for entindex | clientdll |
| ime_supported_info | Spew IME Supported info. | dontrecord |
| ime_hkl_info | Spew IME HKL info. | dontrecord |
| mm_ignored_sessions_reset | Reset ignored sessions | developmentonly |
| mm_datacenter_debugprint | Shows information retrieved from data center |  |
| mm_debugprint | Show debug information about current matchmaking session |  |
| voice_reset_mutelist | Reset all mute information for all players who were ever muted. |  |
| voice_mute | Mute a specific Steam user |  |
| voice_unmute | Unmute a specific Steam user, or `all` to unmute all connected players. |  |
| voice_show_mute | Show whether current players are muted. |  |
| game_alias | Set the configuration of game type and mode based on game alias like "deathmatch". | release |
| groups | Show status of all spawn groups. | gamedll |
| r_camerapos | Prints out the current camera position + orientation to the console | linked_concommand |
| r_incrementlodscale | Modifies the LOD scale | linked_concommand |
| r_setpos | Moves the camera position + orientation to the specified position | linked_concommand |
| r_entpos | Moves the camera position + orientation to the named entity | linked_concommand |
| commandtool_exec | Runs a command from the command tool | gamedll |
| spawn_group_activate | Activate specified spawngroup. | gamedll cheat |
| spawn_group_load | Load named spawn group. | gamedll cheat |
| spawn_group_unload | Unload named spawn group. | gamedll cheat |
| spawn_group_list | List all spawn groups | gamedll cheat |
| entityreport | Reports all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by. | gamedll |
| entitysummary | Summarizes (by class) all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by. | gamedll |
| cl_groups | Show status of all spawn groups. | clientdll |
| cl_decal_debug | Toggles client decal debug visualization | clientdll |
| cl_decal_shoot | Shoots a client-side decal | clientdll |
| cl_decal_clear_world | Clears world decals | clientdll |
| cl_decal_clear_all_entities | Clears decals from all entities | clientdll |
| r_printdecalinfo | Prints info about decals currently in the scene | clientdll |
| cl_commandtool_exec | Runs a command from the command tool | clientdll |
| cl_entityreport | Reports all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by. | clientdll |
| cl_entitysummary | Summarizes (by class) all extant entities. Optional 2nd arg is a substring of a classname that the list will be filtered by. | clientdll |