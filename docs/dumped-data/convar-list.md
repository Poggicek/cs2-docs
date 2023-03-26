---
sidebar_position: 1
---

# ConVars

## List

<div class="table-overflow-fix">


| Name | Description | Flags |
| ---- | ----------- | ----- |
| testscript_debug | Debug test scripts. | developmentonly |
| host_force_frametime_to_equal_tick_interval |  | developmentonly |
| host_force_max_frametime_to_tick_interval |  | developmentonly |
| host_framerate | Set to lock per-frame time elapse. | release |
| host_timescale | Prescale the clock by this amount. | replicated cheat |
| engine_max_resource_system_update_time |  | developmentonly |
| r_experimental_lag_limiter |  | developmentonly |
| vis_sunlight_enable | Toggle whether to use sunlight PVS for sunlight views (0 = sky PVS, 1 = sunlight PVS) | developmentonly cheat |
| vis_enable | Toggle static visibility | developmentonly |
| r_indirectlighting | Set to use indirect lighting | cheat |
| r_rendersun | Render sun lighting | cheat |
| r_drawdecals | Set to render decals | cheat |
| r_drawviewmodel | Render view model | clientdll cheat |
| r_directlighting | Set to use direct lighting | cheat |
| r_ssao | Set to use screen-space ambient occlusion | developmentonly |
| r_force_zprepass | 0: Force z prepass off. 1: Force on. -1: Don't force | cheat |
| r_zprepass_normals | 0: Use normals reconstructed from depth. 1: Output correct normals in z prepass. | cheat |
| r_translucent | Enable rendering of translucent geometry | cheat |
| r_worldlod | Set to enable world LOD | cheat |
| r_showsunshadowdebugrendertargets | Set to render sun shadow render targets | cheat |
| r_showdebugoverlays | Set to render debug overlays | cheat |
| r_showsceneobjectbounds | Show scenesystem object bounding boxes | cheat |
| r_showsunshadowdebugsplitvis | Set to render sun shadow split visibility debugger | cheat |
| r_show_hipoly_draw_calls | Transparent wireframe overlay for draw calls with triangle count higher than specified number | cheat |
| r_showdebugrendertarget | Set the debug render target to show, 0 == disable | cheat |
| fog_enable | Enable fog | clientdll cheat |
| mat_wireframe | 0=Off, 1=Surface Wireframe, 2=Transparent Wireframe | cheat |
| mat_fullbright |  | cheat |
| mat_max_lighting_complexity |  | cheat |
| mat_luxels |  | cheat |
| mat_lpv_luxels |  | cheat |
| r_drawskybox | Render the 2d skybox. | cheat |
| r_size_cull_threshold_fade | % above the screen size percentage where we will start fading out (==0 will disable fading). | developmentonly |
| r_size_cull_threshold | Threshold of screen size percentage below which objects get culled | developmentonly |
| r_size_cull_threshold_shadow | Threshold of sun shadow map size percentage below which objects get culled | cheat |
| r_drawblankworld | Render blank instead of the game world | cheat |
| fog_override_enable | Use fog_override convars instead of world fog data | cheat |
| fog_override_start |  | cheat |
| fog_override_end |  | cheat |
| fog_override_max_density |  | cheat |
| fog_override_exponent |  | cheat |
| r_dof_override |  | cheat |
| r_dof_override_near_blurry |  | cheat |
| r_dof_override_near_crisp |  | cheat |
| r_dof_override_far_crisp |  | cheat |
| r_dof_override_far_blurry |  | cheat |
| r_dof_override_tilt_to_ground |  | cheat |
| mat_shading_complexity | Visualize shading complexity | cheat |
| mat_overdraw | Visualize overdraw | cheat |
| tv_relay_rate | default rate for relays | developmentonly |
| tv_instant_replay_full_frame | Send embedded full frames | developmentonly |
| tv_instant_replay_full_frame_time | Seconds between full frame embeddeds | developmentonly |
| tv_extended_logging |  | developmentonly |
| tv_instant_replay_full_frame_build_threaded | Build the full frames on a seperate job thread | developmentonly |
| tv_threaded_merge_entity_deltas | Enable SourceTV threading of delta merging | developmentonly |
| spec_replay_leadup_time | Replay time in seconds before the highlighted event | replicated release |
| tv_broadcast_url | URL of the broadcast relay | release |
| tv_broadcast_url1 | URL of the broadcast relay1 | release |
| r_drawpanorama | Enable the rendering of panorama UI | cheat |
| input_downimpulsevalue |  | developmentonly clientdll |
| input_upimpulsevalue |  | developmentonly clientdll |
| input_filter_relative_analog_inputs |  | clientdll archive |
| bug_submitter_override |  | archive |
| r_skip_precache_validation_check |  | developmentonly |
| sv_pause_on_console_open | 1 = Pause the game when pressing ~ to open the console. CTRL+~ opens the console without pause. | archive |
| r_add_views_in_pre_output |  | developmentonly |
| r_extra_render_frames |  | cheat |
| con_enable | Allows the console to be activated. | archive |
| r_debug_draw_safe_area_insets | Render safe area insets as wireframe. | developmentonly |
| input_forceuser | Force user input to this split screen player. | cheat |
| mouse_disableinput | Set to disable mouse input | developmentonly |
| input_button_code_is_scan_code | Bind keys based on keyboard position instead of key name | archive |
| convars_echo_toggle_changes | Echo to the console changes caused by toggling. | developmentonly |
| joy_axisx_relative |  | archive per_user |
| joy_axisy_relative |  | archive per_user |
| joy_axisz_relative |  | archive per_user |
| joy_axisr_relative |  | archive per_user |
| joy_axisu_relative |  | archive per_user |
| joy_axisv_relative |  | archive per_user |
| joy_axisx_deadzone |  | archive per_user |
| joy_axisy_deadzone |  | archive per_user |
| joy_axisz_deadzone |  | archive per_user |
| joy_axisr_deadzone |  | archive per_user |
| joy_axisu_deadzone |  | archive per_user |
| joy_axisv_deadzone |  | archive per_user |
| player0_using_joystick |  | archive |
| tv_enable | Activates SourceTV on server. | notify release |
| tv_enable1 | Activates SourceTV[1] on server. | notify release |
| clientport | If non-zero, client binds port to specific address.  Usually you should leave this blank to use a different random system-assigned port for each connection. | release |
| hostport | Host game server port | release |
| tv_port | Host SourceTV port | release |
| r_vconsole_foregroundforcerender | When VConsole is in the foreground, force all engine & tools to render | developmentonly |
| r_always_render_all_windows | Always force all engine & tools to render | developmentonly |
| r_force_render_frame_count | The number of frames to render when a | developmentonly |
| splitscreen_mode |  | archive |
| jpeg_quality | Set jpeg screenshot quality. [1..100] | developmentonly |
| screenshot_subdir | Set the screenshot directory. | developmentonly |
| screenshot_prefix | Set the screenshot auto naming prefix. | developmentonly |
| screenshot_width | Screenshot width. -1 for screen width. | developmentonly |
| screenshot_height | Screenshot height. -1 for screen height. | developmentonly |
| cl_playback_screenshots | Allows the client to playback screenshot and jpeg commands in demos. | developmentonly |
| voice_sequence_maximum_wait_time | When receiving packets out of sequence, wait this many seconds for missing sequences to arrive | developmentonly |
| voice_always_sample_mic | For systems experiencing a hang/stall when using voice chat. | archive |
| snd_mute_losefocus |  | archive |
| voice_threshold |  | clientdll archive |
| voice_threshold_delay |  | developmentonly |
| soundsystem_update_async |  | developmentonly |
| stats_display | Displays perf statistics information | developmentonly |
| stats_collect_gpu | While doing stats_display, collect GPU perf counters. Used for stats_print_gpu. | developmentonly |
| vprof_counters |  | developmentonly |
| vprof_counters_show_minmax |  | developmentonly |
| debug_draw_enable |  | developmentonly replicated |
| engine_rendersystem_used | Rendersystem option in use (changing this does not change the rendersystem). | developmentonly |
| engine_rendersystem_init | Rendersystem option requested (changing this does not change the rendersystem). | developmentonly |
| engine_platform_name_extended | Platform the engine is running on. | developmentonly |
| engine_ostype | OS type the engine is running on. | developmentonly |
| engine_cpu_info_extended | CPU the engine is running on. | developmentonly |
| cl_language | Language | developmentonly |
| sys_minidumpspewlines | Lines of crash dump console spew to keep. | release |
| sv_maxrate | Max bandwidth rate allowed on server, 0 == unlimited | replicated release |
| sv_minrate | Min bandwidth rate allowed on server, 0 == unlimited | replicated release |
| sys_minidumpexpandedspew |  | developmentonly |
| report_connection_failure_percentage |  | developmentonly |
| engine_no_focus_sleep |  | archive |
| engine_no_focus_sleep_vconsole_suppress | When VConsole is in the foreground, don't trigger engine_no_focus_sleep behavior | developmentonly |
| engine_show_frame_pacing |  | developmentonly |
| battery_saver | OBSOLETE replaced by mobile_fps_* - Battery saver mode. 0=off, 1=on | archive |
| mobile_fps_limit | MOBILE_FPS_CONTROL: Mobile FPS limit - 15, 30, 60 | archive |
| mobile_fps_increase_during_touch | MOBILE_FPS_CONTROL: If true we increase framerate limit during touch | archive |
| mobile_fps_increase_during_charging | MOBILE_FPS_CONTROL: If true we increase framerate limit while charging | archive |
| mobile_fps_increase_during_hfr_animations | MOBILE_FPS_CONTROL: If true we increase framerate limit during HFR-tagged animations and transitions. | developmentonly hidden |
| fps_max | Frame rate limiter.  0=no limit.  Does not apply to dedicated server. | archive release |
| fps_max_ui | Frame rate limiter while the game UI is displayed.  0=no limit.  Does not apply to dedicated server. | archive |
| fps_max_tools | Additional frame rate limit while in tools mode and a window other than the game window has focus. Note that fps_max still applies, this only allows the maximum frame rate for tools mode to be lower. 0=no tools specific limit. | archive |
| sv_fps_max | Dedicated server frame rate limiter. 0=tick rate. Only applies to the dedicated server. | developmentonly hidden |
| async_serialize | Force async reads to serialize for profiling | developmentonly |
| con_logfile_suffix | Suffix to append to the console log, may be changed to reopen the log | developmentonly |
| gameevents_showevents | Dump game events to console. (1 = Show Signaling, 2 = Show Posting also). | developmentonly |
| gameevents_showeventlisteners | Show listening addition/removals | developmentonly |
| execute_command_every_frame |  | cheat |
| engine_show_frame_dispatch | show frame dispatch names. | developmentonly |
| engine_show_frame_ticks |  | developmentonly |
| engine_show_frame_multiple_ticks |  | developmentonly |
| engine_vr_max_ticks_to_simulate | Max number of ticks to simulate per frame, after which simulation will start to slow down compared to real time. | developmentonly |
| engine_render_only |  | developmentonly |
| engine_allow_multiple_ticks_per_frame | When the client is catching up in low frame rate situations, should we run tick more than once a frame? | developmentonly |
| engine_allow_multiple_simulates_per_frame | When the client is catching up in low frame rate situations, should we run client simulate more than once a frame? | developmentonly |
| engine_client_tick_pad_enable |  | developmentonly |
| ss_voice_hearpartner | Route voice between splitscreen players on same system. | developmentonly |
| sv_max_unreliable_delta_size | Maximum allowable entity delta size over unreliable delivery. | developmentonly |
| sv_disable_reliable_delta_retransmit | Assume that a reliable entity delta will be ack'ed and send future deltas relative to the last reliable delta. | developmentonly |
| sv_ents_write_alarm | Print callstack every time CNetworkGameServerBase::WriteEntityUpdate takes more than this amount of milliseconds | release |
| sv_filterban | Set packet filtering by IP mode | developmentonly |
| sv_banid_enabled | Whether server supports banid command | release |
| sv_banid_dev_enabled |  | developmentonly |
| sv_max_queries_sec | Maximum queries per second to respond to from a single IP address. | release |
| sv_max_queries_window | Window over which to average queries per second averages. | release |
| sv_max_queries_sec_global | Maximum queries per second to respond to from anywhere. | release |
| sv_logblocks | If true when log when a query is blocked (can cause very large log files) | release |
| sv_logsdir | Folder in the game directory where server logs will be stored. | archive |
| sv_logfile | Log server information in the log file. | archive |
| sv_logflush | Flush the log file to disk on each write (slow). | archive |
| sv_logecho | Echo log information to the console. | archive |
| sv_log_onefile | Log server information to only one file. | archive |
| sv_logbans | Log server bans in the server logs. | archive |
| sv_parallel_packentities | Set to 1 to use threaded snapshot sending on listen servers, 2 for dedicated servers. | release |
| sv_networkvar_validate | Validate each StateChanged against known offsets. | release |
| sv_enable_delta_packing | When enabled, this allows for entity packing to use the property changes for building up the data. This is many times faster, but can be disabled for error checking. | release |
| sv_usenetworkvars | Use networkvar system. | developmentonly |
| sv_networkvar_perfieldtracking | Track individual field offset changes, rather than a single dirty flag for the whole entity. | release |
| tv_allow_camera_man_override | Allows cameraman_override to have effect. When this is set, the primary interactive caster will have all the relevant fields present in all network packets, in every snapshot. This allows the secondary cameraman (-interactivecaster that connects to a tv port) to override those fields some seconds later regardless of whether they changed originally or not. | release |
| sv_enable_alternate_baselines | Allow alternate baseline system, set to 2 for debugging spew. | release |
| rcon_password | remote console password. | dontrecord release server_cannot_query |
| rcon_connected_clients_allow | Allow clients to use rcon commands on server. | replicated release |
| vconsole_rcon_server_details | when non-empty allows for easy vconsole connection to the dedicated server. | dontrecord release server_cannot_query |
| sv_rcon_banpenalty | Number of minutes to ban users who fail rcon authentication | developmentonly |
| sv_rcon_maxfailures | Max number of times a user can fail rcon authentication before being banned | developmentonly |
| sv_rcon_minfailures | Number of times a user can fail rcon authentication in sv_rcon_minfailuretime before being banned | developmentonly |
| sv_rcon_minfailuretime | Number of seconds to track failed rcon authentications | developmentonly |
| sv_rcon_log | Enable/disable rcon logging. | developmentonly |
| closecaption | Enable close captioning. | clientdll archive userinfo |
| hostname | Hostname for server. | release |
| hostname_in_client_status | Show server hostname in client status. | release |
| developer | Set developer message level. | developmentonly release |
| violence_hblood | Draw human blood | archive |
| violence_hgibs | Show human gib entities | archive |
| violence_ablood | Draw alien blood | archive |
| violence_agibs | Show alien gib entities | archive |
| sv_unlockedchapters | Highest unlocked game chapter. | archive |
| name |  | archive per_user |
| mem_test_quiet | Don't print stats when memtesting | developmentonly |
| mem_test_each_frame | Run heap check at end of every frame | developmentonly |
| mem_test_every_n_seconds | Run heap check at a specified interval | developmentonly |
| engine_sse42 | turn on sse4.2 optimizations in the engine | developmentonly |
| sv_temp_baseline_string_table_buffer_size | Buffer size for writing string table baselines | developmentonly |
| tv_playcast_delay_resync | To alleviate intermittent network connectivity problems, this is the number of seconds to wait before actually re-syncing the stream after failure | release |
| tv_playcast_showerrors | Set to display headers upon error (e.g. "CF-Ray,CF-Cache-Status,Body" ) | hidden release |
| tv_playcast_origin_auth | Get request X-Origin-Auth string | hidden release |
| tv_playcast_max_rcvage |  | hidden release |
| tv_playcast_max_rtdelay |  | hidden release |
| tv_playcast_delay_prediction |  | release |
| tv_playcast_retry_timeout | In case of intermittent network problems, how long should playcast retry fragment retrieval before resorting to resync | release |
| tv_broadcast_keyframe_interval | The frequency, in seconds, of sending keyframes and delta fragments to the broadcast relay server | release |
| tv_broadcast_keyframe_interval1 | The frequency, in seconds, of sending keyframes and delta fragments to the broadcast1 relay server | release |
| tv_broadcast_startup_resend_interval | The interval, in seconds, of re-sending startup data to the broadcast relay server (useful in case relay crashes, restarts or startup data http request fails) | release |
| tv_broadcast_max_requests | Max number of broadcast http requests in flight. If there is a network issue, the requests may start piling up, degrading server performance. If more than the specified number of requests are in flight, the new requests are dropped. | release |
| tv_broadcast_max_requests1 | Max number of broadcast1 http requests in flight. If there is a network issue, the requests may start piling up, degrading server performance. If more than the specified number of requests are in flight, the new requests are dropped. | release |
| tv_broadcast_drop_fragments | Drop every Nth fragment | hidden release |
| tv_broadcast_terminate | Terminate every broadcast with a stop command | hidden release |
| tv_broadcast_origin_auth | X-Origin-Auth header of the broadcast POSTs | hidden release |
| tv_broadcast_origin_auth1 | X-Origin-Auth header of the broadcast1 POSTs | hidden release |
| tv_broadcast_origin_delay | Injection delay request for CDN rebroadcast frameworks, seconds | hidden release |
| tv_maxrate | Max SourceTV spectator bandwidth rate allowed, 0 == unlimited | release |
| tv_rate_multiplier | Multiply requested rate by this value to adjust Dota TV send rate | developmentonly |
| tv_relaypassword | SourceTV password for relay proxies | protected notify dontrecord release |
| tv_chattimelimit | Limits spectators to chat only every n seconds | release |
| tv_chatgroupsize | Set the default chat group size | release |
| tv_grouprelaydatareliable | When enabled, this will collect all information for relay sending into a single datagram to ensure that the data stays together through a potentially large number of relays | developmentonly |
| tv_grouprelaydataunreliable | When enabled, this will collect all information for relay sending into a single datagram to ensure that the data stays together through a potentially large number of relays | developmentonly |
| tv_grouprelaydatavoice | Similar to tv_grouprelaydata, but controls whether or not the voice channels should be routed into the grouped data for the relays | developmentonly |
| tv_autoretry | Relay proxies retry connection after network timeout | release |
| tv_timeout | SourceTV connection timeout in seconds. | release |
| tv_snapshotrate | Snapshots broadcast per second | replicated release |
| tv_snapshotrate1 | Snapshots broadcast per second, GOTV[1] | release |
| demo_writefullupdate_rate | Interval time in seconds to write full updates to demo. | developmentonly |
| sv_replaysdir | Directory to store replays in | developmentonly |
| tv_demo_starttick |  | developmentonly |
| tv_maxclients | Maximum client number on SourceTV server. | release |
| tv_maxclients_relayreserved | This number of relay client connections are reserved for SourceTV relays. | release |
| tv_update_hibernation_enabled | Allow SourceTV to control server hibernation state. | developmentonly |
| tv_autorecord | Automatically records all games as SourceTV demos. | release |
| tv_broadcast | Automatically broadcasts all games as GOTV demos through Steam. | release |
| tv_broadcast1 | Automatically broadcasts all games as GOTV[1] demos through Steam. | release |
| tv_name | SourceTV host name | release |
| tv_password | SourceTV password for all clients | protected notify dontrecord release |
| tv_advertise_watchable | GOTV advertises the match as watchable via game UI, clients watching via UI will not need to type password | protected notify dontrecord release |
| tv_window_size | Specifies the number of seconds worth of frames that the tv replay system should keep in memory. Increasing this greatly increases the amount of memory consumed by the TV system | developmentonly |
| tv_enable_delta_frames | Indicates whether or not the tv should use delta frames for storage of intermediate frames. This takes more CPU but significantly less memory. | release |
| tv_overridemaster | Overrides the SourceTV master root address. | release |
| tv_dispatchmode | Dispatch clients to relay proxies: 0=never, 1=if appropriate, 2=always | release |
| tv_transmitall | Transmit all entities (not only director view) | replicated release |
| tv_debug | SourceTV debug info. | release |
| tv_title | Set title for SourceTV spectator UI | release |
| tv_deltacache | Enable delta entity bit stream cache | release |
| tv_relayvoice | Relay voice data: 0=off, 1=on | release |
| tv_secret_code | When enabled, this will use a uniquely generated server code to authenticate relay connections. This code is coordinated via the GC or some external means rather than by clients directly | developmentonly |
| tv_relay_secret_code | When enabled, this will use a uniquely generated server code to authenticate relay to relay connections. This code is coordinated via the GC or some external means rather than by clients directly | developmentonly |
| tv_relay_quit_after_game | Quit after a game has been relayed, do not hibernate | developmentonly |
| entity_log_load_unserialize | Output unserialization of entities on map load. 0 - off, 1 - client/server, 2 - server, 3 - client | gamedll clientdll replicated cheat |
| demo_recordcommands | Record commands typed at console into .dem files. | cheat |
| demo_quitafterplayback | Quits game after demo playback. | release |
| demo_pauseatservertick | Pauses demo playback at server tick | developmentonly |
| demo_usefastgoto | Use fast frame skipping when available for demo_goto commands. | developmentonly |
| timedemo_start | Starts timedemo on given tick. | developmentonly |
| timedemo_end | Ends timedemo on given tick. | developmentonly |
| demo_flush | Flush writing the demo file every network update | archive |
| demo_allow_game_mismatch | Allow playback of demo even if game directories are not matched [may crash or fail to load]. | developmentonly |
| demo_debug | Turn on demo debug spew. | developmentonly |
| cl_showdemooverlay | How often to flash demo recording/playback overlay (0 - disable overlay, -1 - show always) | developmentonly |
| cl_flushentitypacket | For debugging. Force the engine to flush an entity packet. | cheat |
| cl_parallel_readpacketentities | Set to 1 to use threading snapshot reading (if game supports and server is sending bitcounts). | developmentonly |
| cl_parallel_readpacketentities_threshold | Use parallel processing of snapshot reading if above this many entries. | developmentonly |
| cl_profilereadpacketentities |  | developmentonly |
| cl_parallel_readpacketentities_type | .   -1 = use default (parallel controller split).   0 = single threaded combined (i.e., ReadFieldList and Decode combined into one call).   1 = single threaded split (first pass ReadFieldList, second pass Decode).       2 = worker thread for decode (main thread does ReadFieldList, worker thread does Decode).       3 = parallel combined (threadpool does read/decode on work items in parallel).  4 = parallel split.     5 = parallel control | undefined |like parallel, but uses a parallelcontroller so each thread in pool can share a single SerializedEntity.
 | undefined |parallel controller split. |  developmentonly
| instant_replay | Enable instant replay recording. | developmentonly |
| instant_replay_history_limit | Maximum amount of minutes to save history (0 is unlimited). | developmentonly |
| instant_replay_history_limit_low | Maximum amount of minutes to save history on low memory (32 bit) systems (0 is unlimited). | developmentonly |
| rcon_address | Address of remote server if sending unconnected rcon commands (format x.x.x.x:p)  | dontrecord release server_cannot_query |
| cl_clock_correction | Enable/disable clock correction on the client. | cheat |
| cl_clockdrift_max_ticks | Maximum number of ticks the clock is allowed to drift before the client snaps its clock to the server's. | cheat |
| cl_clock_showdebuginfo | Show debugging info about the clock drift, 1= resets, 2=adjustments, 3=verbose | developmentonly |
| cl_clock_correction_force_server_tick | Force clock correction to match the server tick + this offset (-999 disables it). | cheat |
| cl_clock_correction_adjustment_max_amount | Sets the maximum number of milliseconds per second it is allowed to correct the client clock. It will only correct this amount if the difference between the client and server clock is equal to or larger than cl_clock_correction_adjustment_max_offset. | cheat |
| cl_clock_correction_adjustment_min_offset | If the clock offset is less than this amount (in milliseconds), then no clock correction is applied. | cheat |
| cl_clock_correction_adjustment_max_offset | As the clock offset goes from cl_clock_correction_adjustment_min_offset to this value (in milliseconds), it moves towards applying cl_clock_correction_adjustment_max_amount of adjustment. That way, the response is small when the offset is small. | cheat |
| cl_resend | Delay in seconds before the client will resend the 'connect' attempt | release |
| cl_connectionretrytime_p2p | Number of seconds over which to spread retry attempts for P2P. | release |
| password | Current server access password | archive dontrecord server_cannot_query |
| cl_clockdbg |  | developmentonly |
| cl_clock_unhook |  | developmentonly |
| cl_timeout | After this many seconds without receiving a packet from the server, the client will disconnect itself | archive |
| cl_disconnect_soundevent | This soundevent is called to stop the desired soundevents when the game is disconnected. | developmentonly |
| tv_nochat | Don't receive chat messages from other SourceTV spectators | archive userinfo |
| cl_ignorepackets | Force client to ignore packets (for debugging). | cheat |
| cl_predict_after_every_createmove | run prediction after every CreateMove instead of only after CreateMove for the final tick in a frame. | developmentonly |
| spec_replay_rate_base | Base time scale of Killer Replay.Experimental. | replicated release |
| rate | Min bytes/sec the host can receive data | archive userinfo |
| cl_usercmd_dbg | show usercmd payload sizing info for packets with more than this many usercmds | developmentonly |
| cl_usercmd_maxcount | max number of CUserCmds to send in one packet | release |
| r_aspectratio |  | developmentonly |
| cl_interpolate | Interpolate entities on the client. | developmentonly clientdll userinfo |
| cl_cache_sendtable | Cache sendtables | developmentonly |
| cl_sendtable_cache_filename | Send tables cache file | developmentonly |
| cl_spawngroup_spewresources | Spew all manifest add/updates. | developmentonly |
| cl_log_tick | Log when a tick is received. | developmentonly |
| cl_log_tick_skips | Log when the tick delta &gt;= this | developmentonly |
| cl_spawngroup_log | Dump the contents of the next spawngroup manifest to file. | developmentonly |
| cl_debug_overlays_broadcast | Render debug overlays from server. | release |
| sv_pausable_dev | Whether listen server is pausable when running -dev and playing solo against bots | developmentonly |
| sv_pausable_dev_ds | Whether dedicated server is pausable when running -dev and playing solo against bots | developmentonly |
| sv_pure_kick_clients | If set to 1, the server will kick clients with mismatching files. Otherwise, it will issue a warning to the client. | release |
| sv_pure_trace | If set to 1, the server will print a message whenever a client is verifying a CRC for a file. | release |
| sv_cheats | Allow cheats on server | notify replicated release |
| sv_lan | Server is a lan server ( no heartbeat, no authentication, no non-class C addresses ) | release |
| sv_pausable | Is the server pausable. | release |
| sv_voicecodec | Specifies which voice codec DLL to use in a game. Set to the name of the DLL without the extension. | release |
| sv_pvs_max_distance | if set, adds a maximum range to PVS/PAS checks | replicated release |
| sv_parallel_sendsnapshot | Set to 1 to use threading snapshot sending on listen servers, 2 for dedicated servers. | release |
| sv_skyname | Current name of the skybox texture | gamedll clientdll archive replicated |
| sv_debug_overlays_bandwidth | Broadcast server debug overlays traffic | release |
| sv_debug_overlays_broadcast | Broadcast server debug overlays | notify cheat release |
| sv_voiceenable |  | archive notify release |
| voice_debugfeedbackfrom |  | developmentonly |
| sv_reserve_slots_for_reconnecting_players_kick_prior | Kick a previously connected player with the same steamID if a replacement comes along | developmentonly |
| sv_memlimit | If set, whenever a game ends, if the total memory used by the server is greater than this # of megabytes, the server will exit. | cheat release |
| sv_hibernate_postgame_delay | # of seconds to wait after final client leaves before hibernating. | release |
| sv_hibernate_when_empty | Puts the server into extremely low CPU usage mode when no clients connected | release |
| sv_shutdown_immediately_on_request | The server will always shutdown on receiving the shutdown request, even if not hibernating | developmentonly |
| sv_search_key |  | release |
| sv_region | The region of the world to report this server in. | release |
| sv_cluster | Data center cluster this server lives in. | release |
| sv_instancebaselines | Enable instanced baselines. Saves network overhead. | developmentonly |
| sv_stats | Collect CPU usage stats | developmentonly |
| sv_password | Server password for entry into multiplayer games | protected notify dontrecord release |
| sv_tags | Server tags. Used to provide extra information to clients when they're browsing for servers. Separate tags with a comma. | notify release |
| sv_visiblemaxplayers | Overrides the max players reported to prospective clients | release |
| sv_alternateticks | If set, server only simulates entities on even numbered ticks.. | sponly release |
| sv_steamgroup | The ID of the steam group that this server belongs to. You can find your group's ID on the admin profile page in the steam community. | notify release |
| sv_steamgroup_exclusive | If set, only members of Steam group will be able to join the server when it's empty, public people will be able to join the server only if it has players. | release |
| sv_hosting_lobby |  | developmentonly replicated |
| sv_mmqueue_reservation | Server queue reservation | developmentonly dontrecord |
| sv_mmqueue_reservation_timeout | Time in seconds before mmqueue reservation expires. | developmentonly |
| sv_mmqueue_reservation_extended_timeout | Extended time in seconds before mmqueue reservation expires. | developmentonly |
| spawngroup_ignore_timeouts |  | developmentonly |
| sv_snapshot_unlimited | For debugging, don't throw away old snapshots so that if you break in debugger (on remote client or server) it won't require an uncompressed update to resume.  You may run out of memory of course... | replicated release |
| sv_timeout | After this many seconds without a message from fully connected client, the client is dropped | developmentonly |
| spec_replay_enable | Enable Killer Replay, requires hltv server running (0:off, 1:default, 2:force) | replicated release missing3 |
| spec_replay_message_time | How long to show the message about Killer Replay after death. The best setting is a bit shorter than spec_replay_autostart_delay + spec_replay_leadup_time + spec_replay_winddown_time | replicated release |
| spec_replay_rate_limit | Minimum allowable pause between replay requests in seconds | replicated release |
| spec_replay_on_death | When &gt; 0, sets the mode whereas players see delayed replay, and are segregated into a domain of chat and voice separate from the alive players | replicated release |
| replay_debug |  | replicated release |
| sv_maxclientframes |  | developmentonly |
| sv_extra_client_connect_time | Seconds after client connect during which extra frames are buffered to prevent non-delta'd update | developmentonly |
| sv_maxreplay | Maximum replay time in seconds | developmentonly |
| sv_stressbots | If set to 1, the server calculates data and fills packets to bots. Used for perf testing. | release |
| sv_sendtables | Force full sendtable sending path. | developmentonly |
| fs_async_threads | Number of IO threads in async filesystem (-1 == auto) | developmentonly |
| fs_report_async_io |  | developmentonly |
| fs_report_sync_opens | 0:Off, 1:Always, 2:Not during load | release |
| fs_report_long_reads | 0:Off, 1:All (for tracking accumulated duplicate read times), &gt;1:Microsecond threashold | developmentonly |
| fs_warning_mode | 0:Off, 1:Warn main thread, 2:Warn other threads | developmentonly |
| fs_fake_read_delay_ms | Add N ms of delay to every low-level read operation, to simulate a slow disk | developmentonly |
| filesystem_buffer_size | Size of per file buffers. 0 for none | developmentonly |
| filesystem_unbuffered_io |  | developmentonly |
| filesystem_native | Use native FS or STDIO | developmentonly |
| filesystem_max_stdio_read |  | developmentonly |
| filesystem_report_buffered_io |  | developmentonly |
| filesystem_fake_latency |  | developmentonly |
| cl_cursor_scale | Cursor size scaling factor. | archive |
| cl_auto_cursor_scale | Automatic cursor size scaling. | archive |
| joy_wingmanwarrior_centerhack | Wingman warrior centering hack. | archive |
| joy_wingmanwarrior_turnhack | Wingman warrior hack related to turn axes. | archive |
| joy_axisbutton_threshold | Analog axis range before a button press is registered. | archive |
| resourcesystem_multiframe_finalize_time_msec | Max time to spend finalizing resources per frame in miliseconds. | developmentonly |
| d3d_max_feature_level | Report the maximum D3D feature level available. | developmentonly |
| r_low_latency | NVIDIA Low Latency (0 = off, 1 = on, 2 = on + boost) | developmentonly |
| r_low_latency_trigger_flash | NVIDIA Low Latency Trigger Flash | developmentonly |
| r_suppress_redundant_state_changes |  | developmentonly |
| r_draw_first_tri_only |  | cheat |
| r_draw_instances |  | cheat |
| r_texturefilteringquality | 0: Bilinear, 1: Trilinear, 2: Aniso 2x, 3: Aniso 4x, 4: Aniso 8x, 5: Aniso 16x | developmentonly |
| r_fullscreen_gamma | Screen Gamma (only in fullscreen modes) | archive |
| r_wait_on_present |  | developmentonly |
| r_async_shader_compile_notify_frequency |  | developmentonly |
| r_multigpu_num_gpus_found |  | developmentonly |
| r_multigpu_num_gpus_used |  | developmentonly |
| r_dx11_software_cmd_lists | Enable Software Command lists for DX11 (Avoid using deferred contexts) | developmentonly |
| r_use_memory_budget_model | Use a model of GPU memory use to determine budget rather than querying the OS. | developmentonly |
| r_renderdoc_open_captures |  | developmentonly |
| r_timestamp_query_multiplier | Set the TIMESTAMP query cycle multiplier, for drivers that lie | developmentonly |
| r_pipeline_stats_present_flush | Experimental: Set to 1 to enable full GPU pipeline flushing after each present. | developmentonly |
| r_pipeline_stats_command_flush | Experimental: Set to 1 to enable full GPU pipeline flushing after each command list. | developmentonly |
| r_pipeline_stats_use_flush_api | Experimental: Set to 1 to use the ID3D11DeviceContext11::Flush() to flush the GPU pipeline instead of queries. | developmentonly |
| r_pipeline_stats_flush_before_sleeping | Experimental: Set to 1 to enable GPU pipeline flushes right before the render thread sleeps to wait for more work. | developmentonly |
| r_frame_sync_enable |  | developmentonly |
| r_force_no_present | Force the render device to not present frames. | cheat |
| multigpu_skip_transfers |  | developmentonly |
| multigpu_skip_semaphores |  | developmentonly |
| r_texture_pool_size | Total size of the texture pool in MB | developmentonly |
| r_texture_stream_mip_bias | Biases the mip level the texture streaming system choses to stream for each texture. | developmentonly |
| r_max_texture_pool_size | Upper limit on texture pool size. | developmentonly |
| r_texture_nonstreaming_load | Allow immediately loading mips of textures (when possible) when their headers are loaded, saving IO & reducing latency. | developmentonly |
| r_texture_hookup_uses_threadpool | Async Texture hookup uses its own threadpool instead of the global pool. | developmentonly |
| r_texture_stream_max_resolution | Maximum resolution for top mip level in streaming textures. -1 = ignored. | developmentonly |
| r_texture_stream_resolution_bias |  | developmentonly |
| r_validate_texture_streaming | Dumps state of texture streaming at the next frame boundary. | developmentonly |
| r_fallback_texture_orange | Display fallback texture as orange | developmentonly |
| r_texture_eager_eviction |  | developmentonly |
| r_texture_stream_throttle_amount |  | developmentonly |
| r_texture_stream_throttle_count |  | developmentonly |
| r_texture_stream_throttle_count_over_budget |  | developmentonly |
| r_texture_streamout_unthrottle_ms | After hitting throttling limits for streamout, allow it to continue up to this number of milliseconds. | developmentonly |
| r_texture_streaming_timesliced |  | developmentonly |
| r_texture_budget_dynamic | Dynamically adjust texture streaming budget based on GPU memory usage. | developmentonly |
| r_texture_budget_update_period | Time (in seconds) between updating texture memory budget. | developmentonly |
| r_texture_budget_threshold | Reduce texture memory pool size when this percentage of the budget is full. | developmentonly |
| r_texture_pool_reduce_rate | Reduce texture memory pool size by this many MB / s when over budget. | developmentonly |
| r_texture_pool_increase_rate | Increase texture memory pool size by this many MB / s when under budget. | developmentonly |
| r_texture_stream_resolution_bias_update_period |  | developmentonly |
| r_texture_stream_resolution_bias_increase_rate |  | developmentonly |
| r_texture_stream_resolution_bias_decrease_rate |  | developmentonly |
| r_texture_stream_resolution_bias_min |  | developmentonly |
| mat_shader_cache |  | developmentonly |
| mat_warn_bad_modes |  | developmentonly |
| mat_assert_on_error_shader_use |  | developmentonly |
| mat_hide_error_shader |  | developmentonly |
| mat_shading_complexity_color |  | cheat |
| mat_shading_complexity_max_instruction_count |  | cheat |
| mat_shading_complexity_max_register_count |  | cheat |
| mat_overdraw_color |  | cheat |
| font_show_glyph_miss |  | developmentonly |
| mat_colorcorrection |  | developmentonly |
| mat_viewportscale | Scale down the main viewport (to reduce GPU impact on CPU profiling) | developmentonly clientdll |
| @panorama_disable_blur |  | developmentonly hidden |
| @panorama_disable_box_shadow |  | developmentonly hidden |
| @panorama_disable_render_callbacks |  | developmentonly hidden |
| @panorama_disable_draw_fancy_quad |  | developmentonly hidden |
| @panorama_disable_layer_clear |  | developmentonly hidden |
| @panorama_disable_draw_text |  | developmentonly hidden |
| @panorama_force_text_shadow_strength |  | developmentonly hidden |
| @panorama_disable_draw_text_shadow |  | developmentonly hidden |
| @panorama_disable_layer_cache |  | developmentonly hidden |
| @panorama_use_backbuffer_directly |  | developmentonly hidden |
| @panorama_highlight_composition_layers |  | developmentonly hidden |
| @panorama_highlight_slow_operations |  | developmentonly hidden |
| @panorama_highlight_bad_opacity_masks |  | developmentonly hidden |
| @panorama_stats_log_time |  | developmentonly hidden |
| @panorama_min_comp_layer_cache_cost |  | developmentonly hidden |
| @panorama_comp_layer_lru_lifetime |  | developmentonly hidden |
| @panorama_command_reordering |  | developmentonly hidden |
| @panorama_composition_atlas |  | developmentonly hidden |
| @panorama_temp_comp_layer_min_dimension |  | developmentonly hidden |
| @panorama_disable_render_target_cache |  | developmentonly hidden |
| @panorama_render_target_cache_max_size |  | developmentonly hidden |
| snd_ui_spatialization_spread |  | developmentonly cheat |
| panorama_spew_async_event_substring | If non-empty, print debug info about async event queue and dispatch behavior for events containing the substring. | developmentonly hidden |
| panorama_js_minidumps | Enable sending minidumps on JS Exceptions. | developmentonly hidden |
| @panorama_max_fps |  | developmentonly hidden |
| @panorama_max_overlay_fps |  | developmentonly hidden |
| @panorama_max_oof_overlay_up_fps |  | developmentonly hidden |
| @panorama_large_dispatch_event_queue |  | developmentonly hidden |
| @panorama_frame_limit_v8_gc_microseconds |  | developmentonly hidden |
| @panorama_reload_animations |  | developmentonly hidden |
| @panorama_debug_overlay_opacity_min |  | hidden archive |
| @panorama_debug_overlay_opacity_max |  | hidden archive |
| @panorama_debug_overlay_opacity |  | hidden archive |
| @panorama_cache_command_list_repaint_threshold |  | developmentonly hidden |
| @panorama_cache_command_list_size_threshold |  | developmentonly hidden |
| @panorama_disallow_hover_styles |  | developmentonly hidden |
| @panorama_debug_ready_for_display |  | developmentonly hidden |
| @panorama_style_flag_force_invalidate | Force style invalidation of the entire panel subtree when adding / removing style flags. | developmentonly hidden |
| @panorama_classes_force_invalidate | Force style invalidation of the entire panel subtree when adding / removing classes. | developmentonly hidden |
| @panorama_show_fps |  | developmentonly |
| @panorama_show_fps_scale |  | developmentonly |
| @panorama_clear_frames_on_device_restore |  | developmentonly hidden |
| @panorama_disable_descendant_filtering | Disable descendant selector filtering | developmentonly hidden |
| @panorama_suspend_paint |  | developmentonly hidden |
| @panorama_enable_secondary_layout_pass |  | developmentonly hidden |
| @panorama_joystick_axis_repeat_interval_start |  | developmentonly hidden |
| @panorama_joystick_axis_repeat_interval_end |  | developmentonly hidden |
| @panorama_joystick_axis_repeat_curve_time |  | developmentonly hidden |
| @panorama_joystick_button_repeat_interval_start |  | developmentonly hidden |
| @panorama_joystick_button_repeat_interval_end |  | developmentonly hidden |
| @panorama_joystick_button_repeat_curve_time |  | developmentonly hidden |
| @panorama_steampad_button_repeat_interval_start |  | developmentonly |
| @panorama_steampad_button_repeat_interval_end |  | developmentonly |
| @panorama_steampad_button_repeat_curve_time |  | developmentonly |
| @panorama_debug_dead_pad |  | developmentonly |
| steamcontroller_flow_sensitivity |  | developmentonly |
| @panorama_dragscroll_affordance | Minimum mouse movement in pixels before a move is treated as a drag scroll | developmentonly hidden |
| @panorama_dragscroll_mintime | Minimum time that the mouse button must be down before a move is treated as a drag scroll | developmentonly hidden |
| @panorama_dragscroll_velocitymultiplier | Multiplier for flick velocity off of actual measured velocity | developmentonly hidden |
| forceactivecontrollertype |  | developmentonly hidden |
| @panorama_spew_layout_invalidates |  | developmentonly hidden |
| @panorama_transition_time_factor | A float representing a scale factor for transitions. 1.0 is normal, 2.0 would be twice as fast as normal, 0.5 half as fast | developmentonly hidden |
| @panorama_max_text_shadow_strength |  | developmentonly hidden |
| @panorama_allow_transitions |  | developmentonly hidden |
| @panorama_2d_translate_no_comp_layer |  | developmentonly hidden |
| @panorama_might_scroll_no_comp_layer |  | developmentonly hidden |
| @panorama_box_shadow_no_comp_layer |  | developmentonly hidden |
| @panorama_simple_borders_no_comp_layer |  | developmentonly hidden |
| @panorama_allow_texture_composition_layer_fast_path |  | developmentonly hidden |
| @panorama_transforms_no_comp_layer |  | developmentonly hidden |
| @panorama_transform_parents_no_layer_for_perspective |  | developmentonly hidden |
| @panorama_hsbc_through_fast_path |  | developmentonly hidden |
| @panorama_track_render_commands |  | developmentonly hidden |
| lua_assert_on_error |  | developmentonly |
| lua_shipping_assert_on_error |  | developmentonly |
| dti_report_stddev_threshold | For network encoding stats, provide a notes field if field change count is above this many standard deviations for the average field change counts for the serializer. | release |
| net_culloptimization | Enable optimization of slow path that makes HLTV CPU consumption high in AnimGraph-using mods. Will switch to this on by default soon. | developmentonly |
| net_filelogging | Log packets to files | developmentonly |
| net_qosinterval_spew | Spew QoS interval data as we gather it | developmentonly |
| net_qospacketloss_percentage_threshold | Spew a warning if packet loss percentage is above this threshold | developmentonly |
| net_log_processing | Log network processing | developmentonly |
| net_showudp | Dump UDP packets summary to console | release |
| net_showudp_remoteonly | Dump non-loopback udp only | release |
| net_showmsg | Show incoming message: &lt;0\|1\|2\|name&gt; where 1 == all and 2 == all except net_NOP | developmentonly |
| net_showreliable | Like net_showmsg, but only spew reliable messages | developmentonly |
| net_showpeaks | Show messages for large packets only: &lt;size&gt; | developmentonly |
| net_showdrop | Show dropped packets in console | developmentonly |
| net_compresspackets_minsize | Don't bother compressing packets below this size. | developmentonly |
| net_restrict_showmsg_socket | If set, only net_showmsg spew for data inbound on this socket name e.g. client, server, etc. | developmentonly |
| net_max_message_process_count | Maximum number of messages to process from a client in a single frame (0 == no limit). | developmentonly |
| net_max_message_queue_size | Maximum number of messages to allow waiting in queue after processing; exceeding this disconnects the client. 0 == no limit | developmentonly |
| net_detailed_canpacket_log |  | developmentonly |
| net_showoob | Show connectionless UDP traffic. | developmentonly |
| ip | Overrides IP for multihomed hosts | release |
| hostip | Host game server ip | release |
| net_public_adr | For servers behind NAT/DHCP meant to be exposed to the public internet, this is the public facing ip address string: ("x.x.x.x" ) | release |
| net_usesocketsforloopback | Use network sockets layer even for listen server local player's packets (multiplayer only). | developmentonly |
| net_maxroutable | Requested max packet size before packets are 'split'. | archive userinfo |
| net_p2p_listen_dedicated | Should dedicated server listen for new-style P2P? | developmentonly |
| net_fs_showindirections |  | developmentonly |
| labelled_debug_helper_show_text |  | gamedll clientdll replicated cheat |
| labelled_debug_helper_show_position |  | gamedll clientdll replicated cheat |
| labelled_debug_helper_arc_segments |  | gamedll clientdll replicated cheat |
| labelled_debug_helper_enabled |  | gamedll clientdll replicated cheat |
| labelled_debug_helper_scale |  | gamedll clientdll replicated cheat |
| labelled_debug_helper_skeleton_show_bone_names |  | gamedll clientdll replicated cheat |
| ik_debug_perlin_solver |  | developmentonly gamedll clientdll replicated |
| model_default_preview_sequence_name |  | gamedll clientdll archive replicated |
| phys_build_mesh_wings |  | developmentonly |
| ik_hinge_debug_bone_index |  | gamedll clientdll replicated cheat |
| ik_debug_chain_to_filter_by |  | gamedll clientdll replicated cheat |
| mesh_calculate_curvature_smooth_pass_count |  | gamedll clientdll replicated cheat |
| mesh_calculate_curvature_smooth_invert |  | gamedll clientdll replicated cheat |
| mesh_calculate_curvature_smooth_weight |  | gamedll clientdll replicated cheat |
| anim_decode_forcewritealltransforms | Force BatchAnimationDecode to write transformations for all bones | developmentonly |
| iv_debugbone | Debug bone name for interpolation spew of CAnimationState. | release |
| skel_constraints_enable |  | replicated cheat |
| cl_skel_constraints_enable |  | replicated cheat |
| sv_skel_constraints_enable |  | replicated cheat |
| anim_resource_validate_on_load | Validates the animation group channel list against the animations on load for every animation | release |
| animgraph_footlock_ground_roll |  | developmentonly |
| animgraph_motionmatching_print_compressionstats |  | developmentonly replicated |
| animgraph_force_full_network_updates |  | developmentonly |
| animgraph_enable_dirty_netvar_optimization |  | developmentonly |
| animgraph_verify_dirty_netvar_optimization |  | developmentonly |
| animgraph_footlock_enabled | A master convar that effectively disables the entire footlock node. | developmentonly replicated |
| animgraph_footlock_hip_offset_enable |  | developmentonly |
| animgraph_footlock_tilt_mode |  | developmentonly |
| animgraph_footlock_use_hip_shift |  | developmentonly |
| animgraph_footlock_draw_footbase |  | developmentonly |
| animgraph_footlock_trace_ground_enabled | Convar for toggling foot lock ground tracking. | developmentonly replicated |
| animgraph_footlock_calculate_tilt |  | developmentonly replicated |
| animgraph_footlock_auto_ledge_detection | Attempt to detect when the foot is partially hanging off a ledge and stop it tilting to reach the bottom | developmentonly replicated |
| animgraph_footlock_auto_stair_detection | Attempt to detect when the foot is on a stair and will stop it from tilting to reach the next step | developmentonly replicated |
| animgraph_footlock_debug_foot_index |  | developmentonly replicated |
| animgraph_footlock_debug_type |  | developmentonly replicated |
| ik_debug_groundtraces | Show IK trace related details | developmentonly gamedll clientdll replicated |
| animgraph_slowdownonslopes_enabled |  | developmentonly replicated |
| animgraph_ik_debug |  | developmentonly |
| ik_debug_fabrik_backwards_enabled |  | developmentonly |
| ik_debug_fabrik_forwards_enabled |  | developmentonly |
| ik_debug_fabrik_backwards_iterations |  | developmentonly |
| ik_debug_fabrik_forwards_iterations |  | developmentonly |
| ik_fabrik_align_chain |  | developmentonly |
| ik_fabrik_override_num_iterations |  | developmentonly |
| ik_fabrik_forwards_enabled |  | developmentonly |
| ik_fabrik_backwards_enabled |  | developmentonly |
| ik_debug_dogleg3bone |  | developmentonly |
| ik_debug_dogleg3bone_enabled |  | developmentonly |
| ik_debug_all_chains_unique_color_per_chain |  | developmentonly |
| ik_debug_planetilt |  | developmentonly |
| ik_debug_planetilt_axis_length |  | developmentonly |
| ik_planetilt_enable |  | developmentonly |
| ik_debug_constraints |  | developmentonly |
| ik_final_fixup_enable |  | developmentonly |
| ik_debug_targets |  | developmentonly |
| ik_constraints_enabled |  | developmentonly |
| ik_enable | Enable IK. | cheat |
| phys_implicit_integarator | Use implicit integrator for gyroscopic forces | developmentonly notify replicated |
| phys_drag_multiplier | Multiply air drag | developmentonly notify replicated |
| phys_buoyancy_horizontal_damping_multiplier | Multiply water damping for buoyancy affecting linear velocity in the horizontal plane | developmentonly notify replicated |
| phys_buoyancy_vertical_damping_multiplier | Multiply water damping for buoyancy affecting linear velocity in the vertical direction | developmentonly notify replicated |
| phys_buoyancy_angular_damping_multiplier | Multiply water damping for buoyancy affecting angular velocity | developmentonly notify replicated |
| phys_buoyancy_drag_multiplier | Multiply water drag (tries to equalize object velocity with the velocity of the water flow) | developmentonly notify replicated |
| phys_fastaddcloneshape |  | developmentonly |
| rubikon_joint_deepdebugging |  | developmentonly |
| rubikon_joint_always_draw_at_pivot_point |  | developmentonly |
| phys_debug_showdefaultmaterial | If enabled, surfaces with default material are highlighted in physics debug geometry. | cheat |
| phys_build_mass |  | developmentonly |
| phys_build_bounds |  | developmentonly |
| physics_hull_sphere_cast_sat_experimental |  | developmentonly |
| cloth_step |  | developmentonly |
| cloth_sleep_threshold |  | developmentonly |
| cloth_resim_after |  | developmentonly |
| cloth_max_ticks_per_frame |  | developmentonly |
| cloth_step_variability |  | developmentonly |
| cloth_interpolation_strategy |  | developmentonly |
| cloth_rigid_update |  | developmentonly |
| cloth_quasistatic_iters |  | developmentonly |
| cloth_per_bone_scale_enable | Enable per-bone scale in cloth, an experimental feature that is to be universally enabled after a small period of testing | developmentonly |
| cloth_guard_threshold |  | developmentonly |
| cloth_watch |  | developmentonly replicated |
| cloth_debug |  | developmentonly |
| cloth_damping_multiplier |  | developmentonly |
| cloth_damping_bias |  | developmentonly |
| cloth_ground_plane_thickness |  | developmentonly |
| cloth_node_debug_axis_length |  | developmentonly |
| cloth_quad_smooth_rate |  | developmentonly |
| cloth_rod_smooth_rate |  | developmentonly |
| cloth_quad_smooth_iterations |  | developmentonly |
| cloth_rod_smooth_iterations |  | developmentonly |
| cloth_debug_draw_nodepth_alpha |  | developmentonly |
| cloth_ground_offset |  | developmentonly |
| cloth_legacy_stretch_force |  | developmentonly |
| cloth_legacy_support |  | developmentonly |
| cloth_wind |  | developmentonly |
| cloth_wind_pitch |  | developmentonly |
| cloth_dry_drag |  | developmentonly |
| cloth_dry_drag_soften |  | developmentonly |
| cloth_approximate_collide |  | developmentonly |
| phys_validate |  | developmentonly |
| phys2_debug_broadphase |  | developmentonly |
| physics_sphere_cast_with_epsilon_experimental |  | developmentonly |
| cloth_simulate |  | developmentonly |
| cloth_batch |  | developmentonly |
| cl_jiggle_bone_debug | Display physics-based 'jiggle bone' debugging information | cheat |
| cl_jiggle_bone_debug_yaw_constraints | Display physics-based 'jiggle bone' debugging information | cheat |
| cl_jiggle_bone_debug_pitch_constraints | Display physics-based 'jiggle bone' debugging information | cheat |
| cl_jiggle_bone_invert |  | cheat |
| cl_jiggle_bone_sanity | Prevent jiggle bones from pointing directly away from their target in case of numerical instability. | developmentonly |
| phys_jiggle_bone_enable |  | developmentonly |
| phys_old_contact_draw |  | developmentonly |
| phys2_contact_debug_draw_size |  | developmentonly |
| phys_cull_internal_mesh_contacts |  | developmentonly replicated |
| phys_fast_report_contacts | when 1, fast path for collision reporting is implemented making triggers faster in some cases | developmentonly |
| hullivr_edge_merge_tan | Should we try to straighten two faces connected to this edge? (tangent) | developmentonly replicated |
| hullivr_faceisland_merge_tan | Should we try to straighten an island of faces deviating from their average normal (tangent)? | developmentonly replicated |
| hullivr_faceisland_merge_disp | Should we straighten face island if the displacement is this much? (inches) | developmentonly replicated |
| hullivr_version |  | developmentonly replicated |
| vphysics_force_apply_magnitude |  | developmentonly |
| vphysics_return_implicit_velocity |  | developmentonly |
| phys_position_iterations |  | developmentonly |
| phys_velocity_iterations |  | developmentonly |
| vphys2_friction_factor | Change global friction factor | cheat |
| vphys2_restitution_factor | Change global restitution factor | cheat |
| phys_reload_immediately | Set to 1 to reload resources and reconstruct physics of entities on the fly. May unexpectedly change behavior or crash the game, because game code is generally unaware of underlying resource reloads and may hold references to physics that may become invalid during resource reload. It is inherently harder for physics to deal with resource reloads because of persistent nature of objects being simulated (textures can be easily reloaded on the fly; if an entity holds a handle to a ragdoll body part, it may expect that handle to stay valid while the ragdoll exists) | developmentonly |
| cloth_reload_immediately |  | developmentonly |
| phys_step_threaded |  | developmentonly |
| snd_occlusion_bounces |  | replicated cheat |
| snd_occlusion_indirect_radius |  | developmentonly cheat |
| snd_occlusion_debug_listener_pos |  | developmentonly cheat |
| snd_occlusion_indirect_min |  | developmentonly cheat |
| snd_occlusion_indirect_max |  | developmentonly cheat |
| snd_sos_show_operator_pause_entry |  | cheat |
| snd_steamaudio_pathing_enablevis | Enable visualization for pathing. | cheat |
| snd_steamaudio_pathing_enablevalidationvis | Enable visualization for pathing validation. | cheat |
| snd_sos_show_operator_stop_entry |  | cheat |
| snd_sos_limit_self |  | developmentonly |
| snd_sos_show_queuetotrack |  | cheat |
| snd_sos_show_voice_elapsed_time |  | developmentonly |
| snd_sos_show_soundevent_start |  | cheat |
| snd_sos_show_operator_init |  | cheat |
| snd_sos_show_operator_updates |  | cheat |
| snd_sos_show_operator_shutdown |  | cheat |
| snd_sos_list_operator_updates |  | cheat |
| snd_sos_show_operator_event_filter |  | cheat |
| snd_sos_show_operator_operator_filter |  | cheat |
| snd_sos_show_operator_not_executing |  | cheat |
| snd_sos_show_operator_event_and_stack |  | cheat |
| snd_sos_show_operator_field_filter |  | cheat |
| snd_sos_print_full_field_info |  | cheat |
| snd_sos_print_field_references |  | cheat |
| snd_sos_show_soundevent_param_overwrite |  | cheat |
| snd_sos_max_event_base_depth |  | developmentonly |
| snd_sos_show_parameter_overwrite_warnings |  | developmentonly |
| snd_sos_opvar_debug |  | cheat |
| snd_sos_show_opvar_updates |  | cheat |
| snd_sos_show_opvar_updates_filter |  | cheat |
| snd_sos_soundevent_filter |  | cheat |
| snd_sos_pause_system |  | cheat |
| snd_sos_block_stop_global_stack |  | cheat |
| snd_sos_block_global_stack |  | cheat |
| snd_sos_ingame_debug |  | cheat |
| snd_sos_show_track_list |  | developmentonly |
| snd_sequencer_show_bpm |  | cheat |
| snd_sequencer_show_events |  | cheat |
| snd_sequencer_show_quantize_queue |  | cheat |
| snd_enable_subgraph_log |  | developmentonly |
| snd_enable_subgraph_corenull_passthrough |  | developmentonly |
| silence_dsp | When on, silences all DSP mixes. | cheat |
| adsp_room_min |  | developmentonly |
| adsp_duct_min |  | developmentonly |
| adsp_hall_min |  | developmentonly |
| adsp_tunnel_min |  | developmentonly |
| adsp_street_min |  | developmentonly |
| adsp_alley_min |  | developmentonly |
| adsp_courtyard_min |  | developmentonly |
| adsp_openspace_min |  | developmentonly |
| adsp_openwall_min |  | developmentonly |
| adsp_openstreet_min |  | developmentonly |
| adsp_opencourtyard_min |  | developmentonly |
| adsp_debug |  | archive |
| adsp_door_height |  | developmentonly |
| adsp_wall_height |  | developmentonly |
| adsp_low_ceiling |  | developmentonly |
| snd_mergemethod | Sound merge method (0 == sum and clip, 1 == max, 2 == avg). | developmentonly |
| snd_gamevolume | Game volume | archive |
| snd_voipvolume | Voice volume | archive |
| snd_gamevoicevolume | Game v.o. volume | archive |
| snd_delay_sound_ms_shift | Sound device synchronization shift (ms) | developmentonly |
| snd_delay_sound_ms_max | Sound device synchronization max delay (ms) | developmentonly |
| volume | Sound volume | archive |
| snd_toolvolume | Volume of sounds in tools (e.g. Hammer, SFM) | archive |
| snd_musicvolume | Music volume | archive |
| snd_autodetect_latency |  | archive |
| snd_mixahead |  | archive |
| snd_mix_async |  | developmentonly cheat |
| dsp_dist_min |  | cheat demo |
| dsp_dist_max |  | cheat demo |
| dsp_mix_min |  | developmentonly demo |
| dsp_mix_max |  | developmentonly demo |
| dsp_db_min |  | developmentonly demo |
| dsp_db_mixdrop |  | developmentonly demo |
| snd_showstart |  | cheat |
| snd_filter |  | cheat |
| dsp_automatic |  | developmentonly demo |
| dsp_off |  | cheat |
| dsp_volume |  | archive demo |
| dsp_vol_5ch |  | developmentonly demo |
| dsp_vol_4ch |  | developmentonly demo |
| dsp_vol_2ch |  | developmentonly demo |
| snd_mixer_master_level |  | cheat |
| snd_mixer_master_dsp |  | cheat |
| snd_showclassname |  | cheat |
| snd_list |  | cheat |
| snd_disable_mixer_solo |  | cheat |
| snd_soundmixer |  | developmentonly |
| snd_disable_mixer_duck |  | cheat |
| snd_soundmixer_version |  | developmentonly |
| snd_async_spew_blocking | Spew message to console any time async sound loading blocks on file i/o. | developmentonly |
| snd_refdist | Reference distance for snd_refdb | cheat |
| snd_refdb | Reference dB at snd_refdist | cheat |
| snd_gain |  | archive |
| snd_gain_max |  | cheat |
| snd_gain_min |  | cheat |
| snd_sos_default_update_stack |  | developmentonly |
| snd_compare_KV_convert |  | developmentonly |
| snd_sos_use_case_sensitive_soundevents |  | developmentonly |
| snd_sos_soundevent_deferred_interval_time |  | developmentonly |
| snd_sos_soundevent_max_deferred_time |  | developmentonly |
| speaker_config |  | archive |
| sound_device_override | ID of the sound device to use | archive release |
| snd_enable_imgui | Game/Sound System Debugger | developmentonly archive cheat menubar_item |
| snd_hrtf_distance_behind | HRTF calculations will calculate the player as being this far behind the camera. | developmentonly |
| dota_enable_spatial_audio | Flag to enable spatial audio in Dota 2. | developmentonly |
| dota_spatial_audio_mix | Mix value to blend spatial and non-spatial audio in Dota 2. | developmentonly |
| snd_vmix_show_input_updates | If set to 1, show all incoming updates to vmix inputs.. | cheat |
| snd_vmix_override_mix_decay_time | If set &gt; 0, overrides how long the decay time is on all mix graphs (in seconds).. | cheat |
| snd_report_verbose_error | If set to 1, report more error found when playing sounds.. | cheat |
| snd_envelope_rate |  | cheat |
| snd_ducktovolume |  | archive |
| snd_duckerattacktime |  | archive |
| snd_duckerreleasetime |  | archive |
| snd_duckerthreshold |  | archive |
| voice_loopback |  | userinfo |
| voice_fadeouttime |  | developmentonly |
| voice_stall_ms |  | developmentonly |
| voice_min_buffer_ms |  | developmentonly |
| voice_initial_buffer_ms |  | developmentonly |
| snd_sos_show_block_debug | Spew data about the list of block entries. | cheat |
| snd_sos_show_entry_match_free |  | developmentonly |
| snd_op_test_convar |  | cheat |
| snd_dsp_distance_min |  | cheat |
| snd_dsp_distance_max |  | cheat |
| snd_sos_report_entity_deleted |  | developmentonly |
| snd_sos_calc_angle_debug |  | replicated cheat |
| snd_sos_show_mixgroup_path_errors |  | developmentonly |
| snd_occlusion_debug |  | gamedll clientdll replicated cheat |
| cl_snd_cast_clear |  | developmentonly |
| cl_snd_cast_retrigger |  | developmentonly |
| snd_occlusion_min_wall_thickness |  | replicated cheat |
| snd_occlusion_report |  | developmentonly cheat |
| snd_occlusion_override |  | developmentonly replicated cheat |
| snd_occlusion_visualize |  | developmentonly cheat |
| snd_occlusion_rays |  | replicated cheat |
| snd_steamaudio_max_occlusion_samples | The maximum number of rays that can be traced for volumetric occlusion by Steam Audio. | cheat |
| snd_steamaudio_num_rays | The number of rays to trace for reflection modeling by Steam Audio. | cheat |
| snd_steamaudio_num_diffuse_samples | The number of directions considered for ray bounce by Steam Audio. | cheat |
| snd_steamaudio_num_bounces | The maximum number of times any ray can bounce when using Steam Audio. | cheat |
| snd_steamaudio_num_threads | Sets the number of threads used for realtime reflection by Steam Audio. | cheat |
| snd_steamaudio_ir_duration | The time delay between a sound being emitted and the last audible reflection in Steam Audio. | cheat |
| snd_steamaudio_ambisonics_order | The amount of directional detail in the simulated by Steam Audio. | cheat |
| snd_steamaudio_max_convolution_sources | The maximum number of simultaneous sources that can be modeled by Steam Audio. | cheat |
| snd_steamaudio_reverb_order | Ambisonics order to use for convolution reverb. 0th order = 1 channel, 1st order = 4 channels. | developmentonly |
| snd_steamaudio_hybrid_reverb_transition_time | Set the transition time (in seconds) between convolution and parametric reverb. | developmentonly |
| snd_steamaudio_hybrid_reverb_overlap | Set the overlap fraction (0 to 1) for hybrid reverb. | developmentonly |
| snd_steamaudio_reverb_update_rate | Set the maximum update rate (in Hz) for reverb. | developmentonly |
| snd_steamaudio_enable_custom_hrtf | Enable custom HRTF loading. | developmentonly |
| snd_steamaudio_active_hrtf | Index of active HRTF. | developmentonly |
| snd_steamaudio_enable_pathing | This variable is checked by soundstack to globally enabling pathing for audio processing. | cheat |
| snd_steamaudio_load_pathing_data | If set, baked pathing data is loaded. Steam Audio Hammer entities can successfully use pathing in this case. | cheat |
| snd_steamaudio_load_reverb_data | If set, baked reverb data is loaded. Reset it to zero during an format changes of baked data until all data is updated. | cheat |
| mat_tonemap_csgo_force_rate |  | cheat |
| mat_tonemap_csgo_force_accelerate_exposure_down |  | cheat |
| mat_tonemap_csgo_force_use_alpha |  | cheat |
| mat_tonemap_csgo_force_scale |  | cheat |
| mat_tonemap_csgo_uncap_exposure |  | cheat |
| mat_tonemap_csgo_debug |  | developmentonly |
| mat_tonemap_csgo_bloom_start_value |  | cheat |
| mat_tonemap_csgo_bloom_scale |  | cheat |
| volume_fog_enable_jitter |  | cheat |
| volume_fog_enable_stereo |  | cheat |
| volume_fog_disable |  | cheat |
| volume_fog_clipmap_update |  | cheat |
| volume_fog_clipmaps_enabled |  | cheat |
| volume_fog_intermediate_textures_hdr |  | developmentonly |
| volume_fog_enlarge_frusta |  | cheat |
| volume_fog_dither_scale |  | cheat |
| volume_fog_show_volumes |  | cheat |
| volume_fog_width |  | developmentonly |
| volume_fog_height |  | developmentonly |
| volume_fog_depth |  | developmentonly |
| volume_fog_jitter_offset_random |  | developmentonly |
| r_light_probe_volume_debug_grid_albedo | albedo for LPV debug grid | cheat |
| rtx_force_default_hitgroup | Forces all ray traced geometry to use default hit shaders instead of specialized ones. | developmentonly |
| csm_slope_scale_db_override |  | cheat |
| csm_split_log_scalar |  | cheat |
| csm_res_override_0 |  | cheat |
| csm_res_override_1 |  | cheat |
| csm_res_override_2 |  | cheat |
| csm_res_override_3 |  | cheat |
| csm_bias_override_0 |  | cheat |
| csm_bias_override_1 |  | cheat |
| csm_bias_override_2 |  | cheat |
| csm_bias_override_3 |  | cheat |
| csm_max_num_cascades_override | Number of cascades in sunlight shadow | developmentonly |
| csm_max_shadow_dist_override |  | developmentonly |
| csm_viewmodel_shadows |  | developmentonly |
| csm_viewmodel_max_shadow_dist |  | cheat |
| csm_viewmodel_farz |  | cheat |
| csm_viewmodel_max_visible_dist |  | cheat |
| csm_viewdir_shadow_bias |  | cheat |
| csm_cascade_viewdir_shadow_bias_scale |  | cheat |
| csm_cascade0_override_dist |  | cheat |
| csm_cascade1_override_dist |  | cheat |
| csm_cascade2_override_dist |  | cheat |
| csm_cascade3_override_dist |  | cheat |
| r_stereo_multiview_instancing | Use multiview instancing for stereo rendering. | cheat |
| sc_log_submits | Log out display list submits from scenesystem | cheat |
| sc_max_framebuffer_copies_per_layer |  | developmentonly |
| sc_queue_reflection_views_to_layers |  | developmentonly |
| sc_show_rejected_objects |  | developmentonly |
| sc_show_rejected_objects_range |  | developmentonly |
| sc_allow_secondary_contexts |  | developmentonly |
| sc_force_single_display_list_per_layer |  | developmentonly |
| sc_parallel_render_a_view |  | developmentonly |
| sc_no_cull |  | developmentonly |
| sc_no_vis |  | developmentonly |
| sc_bounds_group_cull |  | developmentonly |
| sc_disable_culling_boxes |  | cheat |
| sc_layer_batch_threshold |  | developmentonly |
| sc_layer_batch_threshold_fullsort |  | developmentonly |
| sc_disable_shadow_materials |  | cheat |
| sc_disable_shadow_fastpath |  | cheat |
| sc_extended_stats |  | cheat |
| sc_hdr_enabled_override | Override default setting for HDR rendering. -1 default, 0 NoHdr, 1 Hdr, 2 Hdr 1010102 3 Hdr 111110 | developmentonly |
| r_lightBinnerFarPlane |  | cheat |
| r_cs_skinning |  | developmentonly |
| sc_force_translation_in_projection | If enabled, the camera's translation will be included in the projection matrix. | cheat |
| sc_dump_lists |  | cheat |
| sc_disable_baked_lighting |  | developmentonly |
| sc_check_world |  | cheat |
| sc_lod_distance_scale_override |  | cheat |
| r_fallback_texture_lod_scale | Scale factor for requested texture size (texture streaming) - used for geo that doesn't have a precomputed UV density measure | cheat |
| r_texture_lod_scale | Scale factor for requested texture size (texture streaming) | cheat |
| sc_force_lod_level |  | cheat |
| sc_reject_all_objects |  | cheat |
| sc_skip_traversal |  | cheat |
| sc_disable_procedural_layer_rendering |  | cheat |
| sc_only_render_shadowcasters |  | cheat |
| sc_only_render_opaque |  | cheat |
| sc_skip_identical_rt_binds |  | developmentonly |
| sc_throw_away_all_layers |  | developmentonly |
| sc_keep_all_layers |  | developmentonly |
| sc_batch_layer_cb_updates |  | developmentonly |
| sc_new_morph_atlasing |  | developmentonly |
| sc_spew_cmt_usage |  | developmentonly |
| sc_disableThreading |  | cheat |
| r_shadows |  | cheat |
| debugoverlay_show_text_outline | Toggle display of box around text | cheat |
| debugoverlay_force_respect_ttl | Force respect TTL even when clearing scopes | cheat |
| screenmessage_show | Enable display of console messages on screen. 1 = Enabled, 0 = Disabled, -1 = Enabled if vgui is not present | cheat |
| debugoverlay_ignore_source | Draw everything normal and ignore the source for rendering | cheat |
| debugoverlay_draw_current | Tell debugoverlay to not draw any entries that have aged out by the time of rendering. Useful if sim runs more often than rendering. | cheat |
| r_reset_character_decals |  | developmentonly |
| r_character_decal_resolution |  | developmentonly |
| r_character_decal_renderdoc_capture |  | developmentonly |
| r_fullscreen_quad_single_triangle |  | developmentonly |
| r_ssao_radius |  | developmentonly |
| r_ssao_bias |  | developmentonly |
| r_ssao_strength |  | developmentonly |
| r_ssao_blur |  | developmentonly |
| mat_tonemap_force_min |  | cheat |
| mat_tonemap_force_max |  | cheat |
| mat_tonemap_force_percent_target | Override. Old default was 45. | cheat |
| mat_tonemap_force_percent_bright_pixels | Override. Old value was 1.0 | cheat |
| mat_tonemap_force_average_lum_min | Override. Old default was 3.0 | cheat |
| mat_tonemap_force_rate |  | cheat |
| mat_tonemap_force_accelerate_exposure_down |  | cheat |
| mat_tonemap_force_use_alpha |  | cheat |
| mat_tonemap_force_scale |  | cheat |
| mat_tonemap_uncap_exposure |  | cheat |
| mat_tonemap_debug |  | developmentonly |
| mat_tonemap_force_log_lum_min |  | cheat |
| mat_tonemap_force_log_lum_max |  | cheat |
| mat_tonemap_bloom_start_value |  | cheat |
| mat_tonemap_bloom_scale |  | cheat |
| sc_show_tonemap_visualizer | SceneSystem/Tonemap Visualizer | developmentonly cheat menubar_item |
| mat_tonemap_csgo_force_min |  | cheat |
| mat_tonemap_csgo_force_max |  | cheat |
| mat_tonemap_csgo_force_percent_target | Override. Old default was 45. | cheat |
| mat_tonemap_csgo_force_percent_bright_pixels | Override. Old value was 1.0 | cheat |
| mat_tonemap_csgo_force_average_lum_min | Override. Old default was 3.0 | cheat |
| sc_show_gpu_profiler | SceneSystem/GPU Profiler | developmentonly cheat menubar_item |
| sc_show_texture_visualizer | SceneSystem/Texture Visualizer | developmentonly cheat menubar_item |
| sc_draw_aggregate_meshes | SceneSystem/Aggregates/Draw Aggregates | developmentonly menubar_item |
| sc_aggregate_gpu_culling | Toggles GPU culling of aggregate meshes | developmentonly |
| sc_aggregate_gpu_occlusion_culling |  | developmentonly |
| sc_aggregate_gpu_culling_show_culled | SceneSystem/Aggregates/Show GPU Culled Meshes | developmentonly menubar_item |
| sc_aggregate_gpu_culling_conservative_bounds |  | developmentonly |
| sc_aggregate_material_solo |  | developmentonly cheat |
| r_aoproxy_min_dist |  | developmentonly |
| r_aoproxy_min_dist_box |  | developmentonly |
| r_aoproxy_cull_dist | Distance to cull the AO proxy as a factor of size | developmentonly |
| r_morphing_enabled |  | cheat |
| r_skinning_enabled |  | cheat |
| sc_force_push_constant_update_every_draw |  | developmentonly |
| sc_allow_dynamic_constant_batching |  | developmentonly |
| sc_visualize_sceneobjects | 1 = visualize bounds, 2 = visualize sceneobject mesh materials, 3 = required texture size, 4 = bounds group, 5 = LOD, 6 == LPV Binding | developmentonly |
| sc_visualize_batches | color per batch | developmentonly |
| sc_mesh_backface_culling |  | developmentonly |
| sc_force_materials_batchable |  | cheat |
| sc_disable_world_materials |  | cheat |
| fog_override | Overrides the map's fog settings (-1 populates fog_ vars with map's values) | clientdll cheat |
| fog_color |  | clientdll cheat |
| fog_hdrcolorscale |  | clientdll cheat |
| r_dither_scale |  | developmentonly |
| lb_cubemap_normalization_max |  | developmentonly |
| lb_cubemap_normalization_roughness_begin |  | developmentonly |
| r_directional_lightmaps |  | developmentonly |
| r_light_probe_volume_debug_colors |  | cheat |
| r_cubemap_debug_colors |  | cheat |
| r_light_probe_volume_debug_grid | Show LPV debug grid, 0: off, 1: closest only 2: closest and keep 3: all | cheat |
| r_light_probe_volume_debug_grid_bbox | Show LPV bounding box when debug grid is on, 0: off, 1: on | cheat |
| lb_shadow_map_culling |  | cheat |
| lb_allow_time_sliced_shadow_map_rendering | Allow time-sliced shadow buffer rendering when enabled via gameinfo.gi | developmentonly |
| lb_convert_to_barn_lights_falloff_match_point |  | developmentonly |
| lb_sun_csm_size_cull_threshold_texels | Size, in texels, where we will cull an object in the shadowmap | developmentonly |
| lb_csm_override_staticgeo_cascades | Override Cascades that will render static objects with lb_csm_override_staticgeo_cascades_value | developmentonly |
| lb_csm_override_staticgeo_cascades_value | If lb_csm_override_staticgeo_cascades, override value used to determine which cascades render static objects | developmentonly |
| sc_cache_envmap_lpv_lookup |  | developmentonly |
| r_cpu_light_binner_use_gpu |  | developmentonly |
| r_cpu_light_binner_default_spec_env_fade_time |  | developmentonly |
| r_cpu_light_binner_allow_sun_shadows_on_spots |  | developmentonly |
| r_cpu_light_binner_shadow_target_size |  | developmentonly |
| r_cpu_light_binner_spot_shadow_size |  | developmentonly |
| r_cpu_light_binner_32bit_shadows |  | developmentonly |
| sc_override_shadow_fade_min_dist |  | cheat |
| sc_override_shadow_fade_max_dist |  | cheat |
| lb_enable_lights | SceneSystem/LightBinner/Enable Lights | developmentonly cheat menubar_item |
| lb_enable_envmaps | SceneSystem/LightBinner/Enable EnvMaps | developmentonly cheat menubar_item |
| lb_use_illumination_silhouette | SceneSystem/LightBinner/Use Illumination Bounds | developmentonly cheat menubar_item |
| lb_use_ellipsoid_bounds |  | developmentonly cheat |
| lb_debug_silhouette | SceneSystem/LightBinner/Debug Silhouettes | developmentonly cheat menubar_item |
| lb_debug_tiles | SceneSystem/LightBinner/Debug Tiles | developmentonly cheat menubar_item |
| lb_enable_stationary_lights | Allows rendering stationary/mixed lights | developmentonly cheat |
| lb_enable_dynamic_lights | Allows rendering dynamic lights | developmentonly cheat |
| lb_enable_shadow_casting | Allow stationary/dynamic lights to cast shadows. | developmentonly |
| lb_enable_baked_shadows | SceneSystem/LightBinner/Enable Baked Shadows | developmentonly cheat menubar_item |
| lb_mixed_shadows | SceneSystem/LightBinner/Enable Mixed Shadows | developmentonly cheat menubar_item |
| lb_debug_shadow_atlas | SceneSystem/LightBinner/Debug Dynamic Shadow Atlas | developmentonly cheat menubar_item |
| lb_debug_light_bounds | SceneSystem/LightBinner/Debug Light Bounds | developmentonly cheat menubar_item |
| lb_show_light_fog_clipmap_cb_cost | Show cost of lights in fog clipmap constant buffer. yellow = 1 cost, red = 6 cost | cheat |
| lb_enable_binning | SceneSystem/LightBinner/Enable Binning | developmentonly menubar_item |
| lb_tile_pixels |  | developmentonly |
| lb_bin_slices |  | developmentonly |
| lb_shadow_texture_width_override | Override width of shadow atlas texture | developmentonly |
| lb_shadow_texture_height_override | Override height of shadow atlas texture | developmentonly |
| lb_csm_cascade_size_override | Override width/height of individual cascades in the CSM | developmentonly |
| lb_csm_receiver_plane_depth_bias | Depth bias applied to shadow receiver | developmentonly |
| lb_csm_draw_alpha_tested |  | developmentonly |
| lb_csm_draw_translucent |  | developmentonly |
| lb_enable_sunlight | SceneSystem/LightBinner/Enable Sunlight | developmentonly cheat menubar_item |
| lb_low_quality_shader_fade_region_rescale | For envmaps in low quality shader mode, how much of the fade region to scale the envmap box by. | developmentonly cheat |
| lb_max_visible_envmaps_override | Override maximum visible envmaps | developmentonly cheat |
| lb_max_visible_barn_lights_override | Override maximum visible barn lights | developmentonly cheat |
| lb_shadow_map_allocation_failure_policy | What happens when a shadow map fails allocation? 0 = don't render, 1 = render unshadowed | developmentonly cheat |
| lb_enable_legacy_point_light_shadows | Enable shadows on legacy light_omni (non-barn) lights, not supported by cpu lightbinner | developmentonly cheat |
| r_pixelvisibility_partial |  | cheat |
| r_dopixelvisibility |  | cheat |
| r_pixelvisibility_spew |  | cheat |
| r_drawpixelvisibility | Show the occlusion proxies | developmentonly |
| r_render_to_cubemap_debug |  | developmentonly clientdll |
| r_draw_overlays |  | developmentonly |
| sc_use_clear_subrect |  | developmentonly |
| sc_enable_discard |  | developmentonly |
| sc_disable_spotlight_shadows |  | cheat |
| sc_shadow_depth_bias_state_override |  | developmentonly |
| sc_shadow_depth_bias |  | developmentonly |
| sc_shadow_slopescale_depth_bias |  | developmentonly |
| sc_shadow_depth_bias_clamp |  | developmentonly |
| r_light_probe_volume_debug_grid_prim | 0: spheres, 1: cubes | cheat |
| r_light_probe_volume_debug_grid_samplesize | sphere radius (world) for LPV debug grid | cheat |
| r_light_probe_volume_debug_grid_roughness | roughness for LPV debug grid | cheat |
| r_light_probe_volume_debug_grid_metalness | metalness for LPV debug grid | cheat |
| r_grass_vertex_lighting |  | developmentonly |
| r_grass_alpha_test |  | developmentonly |
| r_grass_start_fade |  | developmentonly |
| r_grass_end_fade |  | developmentonly |
| r_grass_density_mode | 0 = Density corresponds to blade existance, 1 = Density corresponds to blade height, 2 = Both 0 and 1 | developmentonly |
| r_grass_quality | 0 = Off, 1 = Low, 2 = Med, 3 = high, 4 = ultra | developmentonly |
| r_grass_max_brightness_change |  | developmentonly |
| r_grass_allow_flattening |  | developmentonly |
| r_grass_parallel_load |  | developmentonly |
| r_render_world_node_bounds | Render world node bounds | cheat |
| r_lightmap_size | Maximum lightmap resolution. | developmentonly |
| r_lightmap_size_directional_irradiance | Maximum lightmap resolution for directional_irradiance channel. -1 = use value of r_lightmap_size | developmentonly |
| r_lightmap_set | Lightmap set to use, only works on map load | cheat |
| r_world_allow_bindless_desc |  | developmentonly |
| sc_allow_precomputed_vismembers |  | developmentonly |
| r_drawworld | Render the world. | cheat |
| r_world_wind_strength |  | developmentonly |
| r_world_wind_offset_speed |  | developmentonly |
| r_world_wind_frequency_grass |  | developmentonly |
| r_world_wind_frequency_trees |  | developmentonly |
| r_world_wind_dir |  | developmentonly |
| r_world_wind_smooth_time |  | developmentonly |
| r_world_frame_load_threshold_ms |  | developmentonly |
| r_particle_max_detail_level | The maximum detail level of particle to create | developmentonly |
| r_drawparticles | Enable/disable particle rendering | cheat |
| r_draw_particle_children_with_parents | Draw particle children with parents (-1=use gameinfo, 0=no, 1=yes) | cheat |
| r_particle_debug_filter | Limit debug visualizations to substring match of effect name | developmentonly |
| r_particle_debug_randomseeds | Use random seeds in debug | developmentonly |
| r_particle_render_test | render particles 100 times and show perf | developmentonly |
| r_particle_render_refreshes_sleep_timer | Disable to get a better look at what's happening offscreen | developmentonly |
| particles_multiplier | Multiply # of rendered particles by this for perf testing | cheat |
| r_particle_min_timestep | A minimum on particle simulation time, particle simulation happening more frequently than this will lerp. | developmentonly |
| particle_snapshot_allow_combined_models |  | developmentonly |
| r_particle_max_draw_distance | The maximum distance that particles will render | cheat |
| particle_layer_id_whitelist |  | developmentonly |
| cl_particle_batch_mode |  | developmentonly |
| cl_particle_fallback_multiplier | Multiplier for falling back to cheaper effects under load. | developmentonly |
| cl_particle_fallback_base | Base for falling back to cheaper effects under load. | developmentonly |
| cl_particle_retire_cost |  | cheat |
| cl_particle_simulate | Enables/Disables Particle Simulation | cheat |
| cl_particle_max_count |  | developmentonly |
| cl_aggregate_particles |  | developmentonly |
| r_freezeparticles | Pause particle simulation | cheat |
| r_threaded_particles |  | developmentonly |
| r_particle_timescale |  | developmentonly |
| r_particle_debug_force_simulation | -1 for all asleep, 1 for all awake | developmentonly |
| cl_particle_log_creates | Print debug message every time a particle collection is created | developmentonly |
| cl_particle_sim_fallback_threshold_ms | Amount of simulation time that can elapse before new systems start falling back to cheaper versions | developmentonly |
| cl_particle_sim_fallback_base_multiplier | How aggressive the switch to fallbacks will be depending on how far over the cl_particle_sim_fallback_threshold_ms the sim time is.  Higher numbers are more aggressive. | developmentonly |
| r_particle_cables_cast_shadows |  | developmentonly |
| particle_powsimd_random_range_exp |  | developmentonly |
| r_particle_max_texture_layers |  | developmentonly |
| r_particle_mixed_resolution_viewstart |  | developmentonly |
| r_particle_enable_fastpath |  | developmentonly |
| r_particle_force_material_binds |  | developmentonly |
| panorama_debugger_theme |  | clientdll archive |
| @panorama_debug_movies |  | developmentonly hidden clientdll |
| @panorama_movie_async_load_size_bytes |  | developmentonly hidden clientdll |
| @panorama_movie_force_not_ready_behavior |  | developmentonly hidden clientdll |
| @console_position_and_size |  | hidden clientdll archive |
| @console_max_history |  | developmentonly hidden clientdll |
| @console_max_autocomplete |  | developmentonly hidden clientdll |
| @console_max_lines |  | developmentonly hidden clientdll |
| @panorama_dragscroll_minflickvelocity | Minimum velocity that the mouse must be moving as mouse up time to qualify as a drag scroll flick | developmentonly hidden clientdll |
| @panorama_dragscroll_maxflickvelocity | Maximum velocity for a drag scroll flick | developmentonly hidden clientdll |
| @panorama_daisy_wheel | Daisy wheel input mode: RS \| ABXY | developmentonly hidden clientdll |
| nav_path_optimizer_debug |  | gamedll cheat |
| nav_path_jump_process_debug |  | gamedll cheat |
| nav_path_debug |  | gamedll cheat |
| nav_smooth_enable |  | gamedll cheat |
| nav_smooth_use_opt |  | gamedll cheat |
| nav_smooth_separating_dist_override |  | gamedll cheat |
| nav_smooth_calc_z |  | gamedll cheat |
| nav_smooth_constrain_results |  | gamedll cheat |
| nav_smooth_constrain_results_relax |  | gamedll cheat |
| nav_smooth_constrain_spring |  | gamedll cheat |
| nav_smooth_constrain_spring_relax |  | gamedll cheat |
| nav_smooth_draw_calc |  | gamedll cheat |
| nav_smooth_draw_boundary |  | gamedll cheat |
| nav_smooth_draw_constraint_spline |  | gamedll cheat |
| nav_smooth_draw_constraint_spring |  | gamedll cheat |
| nav_smooth_draw_speed |  | gamedll cheat |
| nav_smooth_draw_accel |  | gamedll cheat |
| nav_smooth_spring_const_override |  | gamedll cheat |
| nav_smooth_spring_tension_max_override |  | gamedll cheat |
| nav_smooth_spring_forward_dist_base |  | gamedll cheat |
| nav_smooth_spring_forward_dist_time_limit |  | gamedll cheat |
| nav_smooth_spring_factor_dist |  | gamedll cheat |
| nav_smooth_spring_factor_deriv |  | gamedll cheat |
| nav_smooth_spring_factor_speed |  | gamedll cheat |
| nav_smooth_spring_max_dist |  | gamedll cheat |
| nav_smooth_spring_timestep_min |  | gamedll cheat |
| nav_smooth_spring_timestep_max |  | gamedll cheat |
| nav_smooth_spring_timestep_factor_speed |  | gamedll cheat |
| nav_smooth_spring_timestep_factor_accel |  | gamedll cheat |
| nav_smooth_spring_yaw_rotation_speed |  | gamedll cheat |
| nav_smooth_spring_yaw_threshold |  | gamedll cheat |
| nav_smooth_relax |  | gamedll cheat |
| nav_smooth_relax_use_timesteps |  | gamedll cheat |
| nav_curve_iter |  | gamedll cheat |
| nav_curve_step |  | gamedll cheat |
| nav_curve_max_step |  | gamedll cheat |
| nav_curve_set |  | gamedll cheat |
| nav_curve_lock |  | gamedll cheat |
| nav_curve_alt |  | gamedll cheat |
| nav_pathfind_debug_log |  | gamedll cheat |
| nav_pathfind_debug_draw |  | gamedll cheat |
| nav_pathfind_debug_draw_errors |  | gamedll cheat |
| nav_pathfind_debug_draw_costs |  | gamedll cheat |
| nav_pathfind_debug_draw_total_costs |  | gamedll cheat |
| nav_pathfind_inadmissable_heuristic_factor |  | gamedll cheat |
| population_distribution_debug |  | developmentonly gamedll replicated |
| nav_bfs_debug |  | gamedll cheat |
| nav_search_lattice_progressive_scale |  | developmentonly gamedll |
| nav_search_lattice_initial_scale |  | developmentonly gamedll |
| navspace_debug_pathfind |  | gamedll cheat |
| navspace_debug_stringpull |  | gamedll cheat |
| navspace_debug_trace |  | gamedll cheat |
| navspace_debug_transition_calc |  | gamedll cheat |
| navspace_create_water_transition_connections |  | gamedll cheat |
| navspace_create_water_smooth_connections |  | gamedll cheat |
| navspace_create_tactial_connections |  | gamedll cheat |
| navspace_draw_water_changes | Draw changes in water volumes | gamedll cheat |
| navspace_block_size_max |  | gamedll cheat |
| npcsolve_path_lookahead_const |  | developmentonly gamedll |
| npcsolve_path_lookahead_dist |  | developmentonly gamedll |
| npcsolve_path_close_const |  | developmentonly gamedll |
| npcsolve_path_close_max_tension |  | developmentonly gamedll |
| npcsolve_path_vel_const |  | developmentonly gamedll |
| npcsolve_attract_draw |  | developmentonly gamedll |
| npcsolve_drag_linear |  | developmentonly gamedll |
| npcsolve_constraint_npc |  | developmentonly gamedll |
| npcsolve_constraint_nav |  | developmentonly gamedll |
| npcsolve_separation |  | developmentonly gamedll |
| npcsolve_separation_const |  | developmentonly gamedll |
| npcsolve_separation_dist |  | developmentonly gamedll |
| npcsolve_separation_r2 |  | developmentonly gamedll |
| npcsolve_separation_jitter |  | developmentonly gamedll |
| npcsolve_separation_draw |  | developmentonly gamedll |
| npcsolve_forward |  | developmentonly gamedll |
| npcsolve_forward_const |  | developmentonly gamedll |
| npcsolve_forward_dist |  | developmentonly gamedll |
| npcsolve_forward_margin |  | developmentonly gamedll |
| navnetsolve_draw_tri |  | developmentonly gamedll |
| fire_extinguishes_under_water |  | developmentonly gamedll clientdll replicated |
| nav_volume_debug | Draw or print debug information about nav volume queries. | gamedll cheat |
| cojob_max_no_yield_time_us | Will spew if a job takes longer than the specified number of microseconds | developmentonly gamedll clientdll replicated |
| cojob_lock_hold_warning_threshold_ms | How long in milliseconds before we warn about lock hold duration | developmentonly gamedll clientdll replicated |
| nav_select_hull | Restrict area selection to areas that can support a hull of the given category | gamedll cheat |
| nav_select_allow_blocked | When selecting an area under nav_edit, allow area marked as blocked. | gamedll cheat |
| nav_select_area_id | Select nav area with matching ID. | gamedll cheat |
| nav_select_block_id | Select nav space block with matching ID. | gamedll cheat |
| nav_draw_limit | The maximum number of areas to draw in edit mode | gamedll cheat |
| nav_drag_selection_volume_zmax_offset | The offset of the nav drag volume top from center | developmentonly gamedll replicated |
| nav_drag_selection_volume_zmin_offset | The offset of the nav drag volume bottom from center | developmentonly gamedll replicated |
| nav_split_show_line | Show the free split line. | gamedll cheat |
| navspace_draw_cluster |  | gamedll cheat |
| navspace_draw_cluster_neighbor |  | gamedll cheat |
| nav_test_path | Calculate and draw a path from player/camera position to the test position. | gamedll cheat |
| nav_test_path_space | Should nav_test_path test 3d navigation?  1 = space to space, 2 = multi-modal space/ground | gamedll cheat |
| nav_test_path_space_fly | Test flight paths | gamedll cheat |
| nav_test_path_space_swim | Test swim paths | gamedll cheat |
| nav_test_path_lock_start | Lock the pathfinding start to the current intersection point. | gamedll cheat |
| nav_test_path_lock_goal | Lock the pathfinding goal to the current intersection point. | gamedll cheat |
| nav_test_path_opt | Enable path optimization for nav_edit_path paths. | gamedll cheat |
| nav_test_path_opt_transitions |  | gamedll cheat |
| nav_test_path_expansion_search | Extend nav_test_path by doing an expansion search on that path.  Convar value defines dist. | gamedll cheat |
| nav_test_path_move |  | gamedll cheat |
| nav_test_path_return | Calculate a return path from cursor position to the path calculated by nav_test_path. | gamedll cheat |
| nav_test_rays |  | gamedll cheat |
| nav_test_ray_space |  | gamedll cheat |
| nav_test_boundary_zone_circle |  | gamedll cheat |
| nav_test_boundary_zone_path |  | gamedll cheat |
| nav_test_boundary_zone_rays |  | gamedll cheat |
| nav_test_boundary_zone_rays_random |  | gamedll cheat |
| nav_test_boundary_zone_rays_margin |  | gamedll cheat |
| nav_test_boundary_zone_force |  | gamedll cheat |
| nav_test_boundary_zone_grid_dim |  | gamedll cheat |
| nav_test_bfs_lattice_dist_0 |  | gamedll cheat |
| nav_test_bfs_lattice_spacing_0 |  | gamedll cheat |
| nav_test_bfs_lattice_dist_1 |  | gamedll cheat |
| nav_test_bfs_lattice_spacing_1 |  | gamedll cheat |
| nav_test_bfs_lattice_dist_2 |  | gamedll cheat |
| nav_test_bfs_lattice_spacing_2 |  | gamedll cheat |
| nav_test_bfs_lattice_mark |  | gamedll cheat |
| nav_test_bfs_simple |  | gamedll cheat |
| nav_test_bfs_lattice_simple |  | gamedll cheat |
| nav_test_bfs_lattice_hex | Demonstrates searching hexagonal lattice over nav mesh. | gamedll cheat |
| nav_test_detour |  | gamedll cheat |
| nav_test_smooth |  | gamedll cheat |
| nav_test_smooth_in_yaw |  | gamedll cheat |
| nav_test_smooth_in_speed |  | gamedll cheat |
| nav_test_smooth_path_speed |  | gamedll cheat |
| nav_test_smooth_separating_dist |  | gamedll cheat |
| nav_test_smooth_spring_const |  | gamedll cheat |
| nav_test_smooth_spring_tension_max |  | gamedll cheat |
| nav_test_smooth_extern_push |  | gamedll cheat |
| nav_test_find_nearest | Calculate the nearest point on the navmesh to the trace point.  Uses selection from nav_select_hull. | gamedll cheat |
| nav_test_find_nearest_clear | Calculate the nearest point on the navmesh to the trace point.  Uses selection from nav_select_hull. | gamedll cheat |
| nav_test_find_z |  | gamedll cheat |
| nav_test_multi_connection |  | gamedll cheat |
| nav_test_split_obstacle |  | gamedll cheat |
| nav_test_split_obstacle_size |  | gamedll cheat |
| nav_test_split_obstacle_update_pos |  | gamedll cheat |
| nav_test_split_obstacle_dirty |  | gamedll cheat |
| nav_test_split_obstacle_leave |  | gamedll cheat |
| nav_test_find_random_connected | Demonstrates finding random points that are connected in the nav mesh to the start point. | gamedll cheat |
| nav_test_find_random_connected_dist_min |  | gamedll cheat |
| nav_test_find_random_connected_dist_max |  | gamedll cheat |
| nav_test_genrt |  | gamedll cheat |
| nav_test_genrt_place |  | gamedll cheat |
| nav_test_spline |  | gamedll cheat |
| nav_test_curve_opt |  | gamedll cheat |
| nav_test_force_npc_repath |  | gamedll cheat |
| nav_test_npc_collision |  | gamedll cheat |
| nav_test_npc_collision_show_geometry |  | gamedll cheat |
| nav_test_npc_area |  | gamedll cheat |
| nav_test_pos_name |  | developmentonly gamedll |
| nav_test_pos_place |  | developmentonly gamedll |
| sv_no_navmesh | Block loading of the navmesh. Unplayable, only used for memory sampling. | developmentonly gamedll cheat |
| nav_genrt_no_split |  | gamedll cheat |
| nav_genrt_no_splice |  | gamedll cheat |
| nav_genrt_step |  | gamedll cheat |
| nav_genrt_debug |  | gamedll cheat |
| nav_obstruction_draw_dist |  | gamedll cheat |
| nav_obstacle_validate |  | gamedll cheat |
| nav_obstruction_draw |  | gamedll cheat |
| nav_obstruction_draw_fail_block |  | gamedll cheat |
| nav_debug_blocked |  | gamedll cheat |
| nav_obstacle_genrt |  | gamedll cheat |
| nav_obstruction_draw_change |  | gamedll cheat |
| nav_avoid_obstacles |  | gamedll cheat |
| nav_path_draw_arrow |  | gamedll cheat |
| nav_path_draw_tick |  | gamedll cheat |
| nav_path_draw_areas |  | gamedll cheat |
| nav_path_draw_connected_areas |  | gamedll cheat |
| nav_path_draw_ground_segments |  | gamedll cheat |
| nav_path_draw_ladder_segments |  | gamedll cheat |
| nav_path_draw_jump_segments |  | gamedll cheat |
| nav_path_draw_climb_segments |  | gamedll cheat |
| nav_path_draw_link_segments |  | gamedll cheat |
| nav_path_debug_compute_with_open_goal |  | gamedll cheat |
| nav_path_fixup_gap_segments |  | gamedll cheat |
| nav_path_record_enable |  | gamedll cheat |
| nav_path_record_draw_last_fail |  | gamedll cheat |
| nav_path_optimize |  | gamedll cheat |
| nav_path_optimize_portals |  | gamedll cheat |
| nav_path_fixup_climb_up_segments |  | gamedll cheat |
| cq_debug | Verbose command queue logging. | developmentonly gamedll replicated |
| cq_force_percent | debugging, force client tick rate faster/slower by specified percentage. | developmentonly gamedll |
| cq_buffer_bloat_msecs | max buffer bloat before we reset and discard buffered user commands. | developmentonly gamedll |
| cq_min_queue_size | min buffer queue target size. | developmentonly gamedll |
| cq_resolve_commands_per_second | once cq_starve_hold_time elapses, we return to cq_min_queue_size over this many commands per second. | developmentonly gamedll |
| cq_queue_sample_count | how many frames of samples to store in the buffer sample queue. | developmentonly gamedll |
| cq_dropped_command_msecs | max msecs of starved usercmds to queue before dropping any additional. | developmentonly gamedll |
| cq_adjust_deadzone_ticks | don't adjust rate faster/slower if average queue is this close to goal. | developmentonly gamedll |
| cq_starve_hold_msecs | if we starve, we hold the faster time dilation for at least this many msecs. | developmentonly gamedll |
| cq_starve_increment_msecs | if we starve, we increment target queue only this often, 0 to disable. | developmentonly gamedll |
| cq_fake_starve | if set, starve this many commands by discarding during process usercmds. | developmentonly gamedll |
| cq_logging | command queue logging of events. | developmentonly gamedll |
| cq_logging_interval | command queue logging per player stats every N seconds, 0 to disable. | developmentonly gamedll |
| cq_runtests |  | developmentonly gamedll |
| cq_runtests_interval |  | developmentonly gamedll |
| cq_runtests_broadcast_info | send message to remote client console when tests change. | developmentonly gamedll |
| sv_remapper_range_multiplier |  | developmentonly gamedll clientdll replicated |
| sv_player_search_range |  | developmentonly gamedll clientdll replicated |
| sv_remapper_loopsoundfix |  | developmentonly gamedll clientdll replicated |
| g_debug_angularsensor |  | gamedll cheat |
| sv_disable_querycache | debug - disable trace query cache | developmentonly gamedll clientdll replicated cheat |
| phys_ragdoll_force_magnitude |  | developmentonly gamedll clientdll replicated |
| ragdoll_sleepaftertime | After this many seconds of being basically stationary, the ragdoll will go to sleep. | developmentonly gamedll clientdll replicated |
| g_ragdoll_maxcount |  | developmentonly gamedll clientdll replicated |
| ragdoll_lru_debug_removal |  | gamedll clientdll replicated cheat |
| sv_ragdoll_lru_debug |  | gamedll replicated cheat |
| ragdoll_lru_min_age |  | gamedll clientdll replicated cheat |
| g_ragdoll_important_maxcount |  | developmentonly gamedll clientdll replicated |
| scene_maxcaptionradius | Only show closed captions if recipient is within this many units of speaking actor (0==disabled). | developmentonly gamedll |
| cc_showmissing | Show missing closecaption entries. | developmentonly gamedll replicated |
| cc_norepeat | In multiplayer games, don't repeat captions more often than this many seconds. | developmentonly gamedll |
| scene_print | When playing back a scene, print timing and event info to console. | developmentonly gamedll clientdll replicated |
| scene_clientflex | Do client side flex animation. | developmentonly gamedll clientdll replicated |
| sv_regeneration_force_on | Cheat to test regenerative health systems | gamedll cheat |
| snd_opvar_set_point_debug |  | gamedll clientdll replicated cheat |
| snd_opvar_set_point_update_interval |  | developmentonly gamedll clientdll replicated |
| snd_steamaudio_dynamicpathing_max_samples |  | developmentonly gamedll clientdll replicated |
| snd_steamaudio_pathing_enable_caching |  | developmentonly gamedll clientdll replicated |
| snd_steamaudio_pathing_caching_threshold |  | developmentonly gamedll clientdll replicated |
| snd_new_visualize | Displays soundevent name played at it's 3d position | gamedll cheat |
| soundevent_check_networked_entity |  | developmentonly gamedll |
| snd_disable_radar_visualize |  | developmentonly gamedll clientdll replicated |
| ai_debug_soundent | Reports sounds being entered into the AI sound list. Set to 1 to see all sounds, set to 2 to only see DANGER sounds. | developmentonly gamedll |
| ai_debug_soundent_duration | Length of time to display ai_debug_soundent visual displays. | developmentonly gamedll |
| soundpatch_captionlength | How long looping soundpatch captions should display for. | developmentonly gamedll clientdll replicated |
| soundscape_debug | When on, draws lines to all env_soundscape entities. Green lines show the active soundscape, red lines show soundscapes that aren't in range, and white lines show soundscapes that are in range, but not the active soundscape. | gamedll cheat |
| steamlearn_enable | Enable SteamLearn data assembly and messaging | developmentonly gamedll |
| steamlearn_override_inference_keys | Keys for overriding inference keys | developmentonly gamedll |
| phys_pushscale |  | developmentonly gamedll clientdll replicated |
| debug_takedamage_summaries |  | gamedll cheat |
| g_debug_transitions | Set to 1 and restart the map to be warned if the map has no trigger_transition volumes. Set to 2 to see a dump of all entities & associated results during a transition. | developmentonly gamedll cheat |
| snd_sos_debug_trigger_opvar |  | developmentonly gamedll |
| teleport_trigger_debug |  | developmentonly gamedll |
| sv_strict_notarget | If set, notarget will cause entities to never think they are in the pvs | developmentonly gamedll |
| voice_serverdebug |  | developmentonly gamedll |
| sv_alltalk | Players can hear all other players' voice communication, no team restrictions | gamedll notify release missing3 |
| mp_tournament_whitelist | Specifies the item whitelist file to use. | developmentonly gamedll |
| gc_secret_key | Secret key for authenticating with the GC. | developmentonly gamedll protected |
| nav_draw_area_filled |  | gamedll cheat |
| nav_draw_area_ztest |  | gamedll cheat |
| nav_draw_blocked |  | gamedll cheat |
| nav_draw_blocked_connections |  | gamedll cheat |
| nav_draw_connected_area_radius |  | gamedll cheat |
| nav_draw_hull_support |  | gamedll cheat |
| nav_draw_connections |  | gamedll cheat |
| nav_draw_indices |  | gamedll cheat |
| nav_draw_inset_margin |  | gamedll cheat |
| nav_draw_should_be_destroyed |  | gamedll cheat |
| nav_draw_split_by_obstacle_mgr |  | gamedll cheat |
| nav_draw_split_by_nav_link_mgr |  | gamedll cheat |
| nav_draw_vert_hotspots |  | gamedll cheat |
| nav_draw_externally_created |  | gamedll cheat |
| nav_draw_area_ground |  | gamedll cheat |
| nav_draw_vertex_normal |  | gamedll cheat |
| nav_edit | Set to one to interactively edit the Navigation Mesh. Set to zero to leave edit mode. | gamedll cheat |
| nav_edit_validate | Validate navmesh structures. | gamedll cheat |
| nav_space_select_dist |  | gamedll cheat |
| nav_draw_mesh |  | gamedll cheat |
| nav_draw_mesh_offset | Vertical offset for drawing the mesh (useful for flat planes where the mesh is often a fixed offset from the physical ground | gamedll cheat |
| nav_draw_jump_links |  | gamedll cheat |
| nav_draw_mesh_grid | Draw the mesh's spatial grid structure around the edit cursor position. | gamedll cheat |
| nav_draw_markup |  | gamedll cheat |
| nav_draw_markup_offset |  | gamedll cheat |
| nav_draw_space_swim |  | gamedll cheat |
| nav_draw_space_fly |  | gamedll cheat |
| nav_draw_space_neighbors |  | gamedll cheat |
| nav_draw_space_portals |  | gamedll cheat |
| nav_draw_space_bounds |  | gamedll cheat |
| nav_draw_attribute_game | Draw all nav areas with this game attribute | gamedll cheat |
| nav_draw_attribute_dynamic | Draw all nav areas with this dynamic attribute | gamedll cheat |
| nav_draw_links |  | gamedll cheat |
| nav_draw_link_alignment |  | gamedll cheat |
| nav_show_area_info_font |  | gamedll cheat |
| nav_show_area_info_font_size |  | gamedll cheat |
| nav_show_area_info_font_voffset |  | gamedll cheat |
| nav_show_area_connections | Show connections to selected area when true | gamedll cheat |
| nav_show_area_verts | Show area vertex positions | gamedll cheat |
| nav_show_area_water_info |  | gamedll cheat |
| motdfile | The MOTD file to load. | gamedll release |
| hostfile | The HOST file to load. | gamedll release |
| sv_shared_team_pvs | PVS is shared between teams | developmentonly gamedll |
| sk_autoaim_mode |  | gamedll clientdll archive replicated |
| mp_friendlyfire | Allows team members to injure other members of their team | gamedll clientdll notify replicated release missing3 |
| tv_delay | SourceTV broadcast delay in seconds | gamedll release missing3 |
| tv_allow_static_shots | Auto director uses fixed level cameras for shots | gamedll release |
| tv_allow_camera_man | Auto director allows spectators to become camera man | developmentonly gamedll |
| tv_log_director_events | Log game events being considered by the director | developmentonly gamedll |
| tv_allow_autorecording_index | When &gt;=0 restricts autorecording only to the specified TV index | gamedll release |
| pickup_check_period |  | developmentonly gamedll |
| logic_npc_counter_debug |  | gamedll replicated cheat |
| markup_volume_ref_cone_angle |  | developmentonly gamedll |
| sv_stopspeed | Minimum stopping speed when on ground. | gamedll clientdll notify replicated release |
| sv_noclipaccelerate |  | gamedll clientdll archive notify replicated |
| sv_noclipspeed |  | gamedll clientdll archive notify replicated |
| sv_noclipfriction | Friction during noclip move. | gamedll clientdll archive notify replicated |
| sv_specaccelerate |  | gamedll clientdll archive notify replicated |
| sv_specspeed |  | gamedll clientdll archive notify replicated |
| sv_specnoclip |  | gamedll clientdll archive notify replicated |
| sv_maxspeed |  | gamedll clientdll notify replicated release |
| sv_accelerate |  | gamedll clientdll notify replicated release |
| sv_airaccelerate |  | gamedll clientdll notify replicated release |
| sv_wateraccelerate |  | gamedll clientdll notify replicated release |
| sv_waterfriction |  | gamedll clientdll notify replicated release |
| sv_footsteps | Play footstep sound for players | developmentonly gamedll clientdll notify replicated |
| sv_rollspeed |  | developmentonly gamedll clientdll notify replicated |
| sv_rollangle | Max view roll angle | developmentonly gamedll clientdll notify replicated |
| sv_friction | World friction. | gamedll clientdll notify replicated release |
| sv_bounce | Bounce multiplier for when physically simulated objects collide with other objects. | gamedll clientdll notify replicated release |
| sv_maxvelocity | Maximum speed any ballistically moving object is allowed to attain per axis. | gamedll clientdll replicated release |
| sv_stepsize |  | developmentonly gamedll clientdll notify replicated |
| sv_backspeed | How much to slow down backwards motion | developmentonly gamedll clientdll replicated |
| sv_waterdist | Vertical view fixup when eyes are near water plane. | developmentonly gamedll clientdll replicated |
| sv_mover_pogofrequency | The capsule pogo stick frequency [hz]. | developmentonly gamedll clientdll notify replicated |
| sv_mover_pogodampingratio | The capsule pogo stick damping ratio [-] | developmentonly gamedll clientdll notify replicated |
| sv_mover_maxslope | The maximum slope the player can overcome [-] | developmentonly gamedll clientdll notify replicated |
| r_JeepViewDampenFreq |  | gamedll clientdll notify replicated cheat |
| r_JeepViewDampenDamp |  | gamedll clientdll notify replicated cheat |
| r_JeepViewZHeight |  | gamedll clientdll notify replicated cheat |
| r_AirboatViewDampenFreq |  | gamedll clientdll notify replicated cheat |
| r_AirboatViewDampenDamp |  | gamedll clientdll notify replicated cheat |
| r_AirboatViewZHeight |  | gamedll clientdll notify replicated cheat |
| mp_restartgame | If non-zero, game will restart in the specified number of seconds | gamedll release |
| sv_allchat | Players can receive all other players' text chat, no death restrictions | gamedll notify release |
| spec_replay_bot | Enable Spectator Hltv Replay when killed by bot | gamedll release |
| particle_test_file | Name of the particle system to dynamically spawn | gamedll cheat |
| particle_test_attach_mode | Possible Values: 'start_at_attachment', 'follow_attachment', 'start_at_origin', 'follow_origin' | gamedll cheat |
| particle_test_attach_attachment | Attachment index for attachment mode | gamedll cheat |
| handforce_scale |  | gamedll clientdll replicated cheat |
| handforce_inner |  | gamedll clientdll replicated cheat |
| handforce_outer |  | gamedll clientdll replicated cheat |
| headforce_strength |  | gamedll clientdll replicated cheat |
| headforce_inner |  | gamedll clientdll replicated cheat |
| headforce_outer |  | gamedll clientdll replicated cheat |
| g_debug_constraint_sounds | Enable debug printing about constraint sounds. | gamedll cheat |
| phys_use_block_solver | Use block solving for constraint entities | gamedll cheat |
| phys_joint_teleport | Teleport joint anchors if connected to world | gamedll cheat |
| phys_length_frequency | Spring stiffness for length constraint | gamedll cheat |
| phys_length_damping_ratio | Spring damping ratio for length constraint | gamedll cheat |
| vehicle_debug_impact_damage |  | developmentonly gamedll |
| crowbar_impact_damage_scale |  | developmentonly gamedll |
| crowbar_impact_damage_mass |  | developmentonly gamedll |
| ent_debug_draw_thinkers |  | developmentonly gamedll clientdll replicated |
| think_limit | Maximum think time in milliseconds, warning is printed if this is exceeded. | gamedll clientdll replicated release |
| npc_vphysics |  | developmentonly gamedll |
| vprof_scope_entity_gamephys |  | developmentonly gamedll |
| sv_usestepsimulation | use old stepsimulation system. | developmentonly gamedll |
| ragdoll_prop_sleepdisabletime | Ragdoll is not allowed to physically sleep until this timer has elapsed. | developmentonly gamedll replicated |
| ragdoll_prop_sleepaftertime | After this many seconds of being basically stationary, the ragdoll will go to sleep. | developmentonly gamedll replicated |
| ragdoll_prop_settle | Enable more aggressive ragdoll settling | developmentonly gamedll replicated |
| ragdoll_visualize_creation_skeleton |  | developmentonly gamedll replicated |
| ragdoll_visualize_targetpose |  | developmentonly gamedll replicated |
| ragdoll_validate_targetpose |  | developmentonly gamedll replicated |
| ragdoll_debug_item_detachment |  | developmentonly gamedll replicated |
| ragdoll_scale_sleep_tolerance |  | developmentonly gamedll replicated |
| ragdoll_override_root_orientation |  | developmentonly gamedll replicated |
| ragdoll_relax_limts |  | developmentonly gamedll replicated |
| prop_nav_ignore_mass |  | developmentonly gamedll |
| prop_nav_ignore_edge_len |  | developmentonly gamedll |
| prop_nav_obstacle_avoid_mass |  | developmentonly gamedll |
| prop_nav_obstacle_avoid_use_connection_blocker |  | developmentonly gamedll |
| prop_nav_obstacle_block_mass_a |  | developmentonly gamedll |
| prop_nav_obstacle_block_edge_min_a |  | developmentonly gamedll |
| prop_nav_obstacle_block_mass_b |  | developmentonly gamedll |
| prop_nav_obstacle_block_edge_min_b |  | developmentonly gamedll |
| prop_debug_vr_collision | Highlights props based on their collision group: COLLISION_GROUP_PROPS(white), COLLISION_GROUP_PROPS_VR_INTERACTIVE_DEBRIS(green), COLLISION_GROUP_PROPS_VR_DEBRIS and will return to COLLISION_GROUP_PROPS_VR_INTERACTIVE_DEBRIS on sleeping(bright red), COLLISION_GROUP_PROPS_VR_DEBRIS permanently (dark red), COLLISION_GROUP_DEBRIS(blue), OTHER(grey) | gamedll cheat |
| phys_shoot_speed |  | developmentonly gamedll |
| phys_shoot_angular_speed |  | developmentonly gamedll |
| debug_physimpact |  | developmentonly gamedll |
| sv_unlag | Enables player lag compensation | developmentonly gamedll |
| sv_maxunlag | Maximum lag compensation in seconds | gamedll release |
| sv_showlagcompensation_rec | If &gt; 0, show lag compensation hitboxes as they're recorded. Value is for how long. | developmentonly gamedll |
| sv_lagcompensationforcerestore | Don't test validity of a lag comp restore, just do it. | gamedll cheat |
| sv_unlag_fixstuck | Disallow backtracking a player for lag compensation if it will cause them to become stuck | developmentonly gamedll |
| sv_unlag_debug |  | developmentonly gamedll |
| physcannon_minforce |  | developmentonly gamedll |
| physcannon_maxforce |  | developmentonly gamedll |
| voice_player_speaking_delay_threshold |  | gamedll cheat |
| mp_fadetoblack | fade a player's screen to black when he dies | developmentonly gamedll clientdll notify replicated |
| sv_infinite_ammo | Player's active weapon will never run out of ammo | gamedll clientdll replicated cheat release missing3 |
| skeleton_instance_smear_boneflags | Smear boneflags across the model.  Costs computation, but tests to make sure your bone flags are consistent. | gamedll cheat |
| phys_dynamic_scaling |  | gamedll clientdll replicated cheat |
| test_restoreonnewmodel |  | developmentonly gamedll clientdll replicated |
| anim_disable |  | developmentonly gamedll clientdll replicated |
| skeleton_instance_lod_optimization | Compute LOD mask internally like since 2016, i.e. force all LOD groups' bones to compute | developmentonly gamedll clientdll replicated |
| cloth_iv_store_back |  | developmentonly gamedll clientdll replicated |
| skel_debug |  | developmentonly gamedll clientdll replicated |
| sv_ent_showonlyhitbox |  | gamedll cheat |
| debug_shared_random |  | developmentonly gamedll clientdll replicated |
| chet_debug_idle | If set one, many debug prints to help track down the TLK_IDLE issue. Set two for super verbose info | developmentonly gamedll archive cheat |
| ai_debug_speech |  | developmentonly gamedll |
| rr_followup_maxdist | 'then ANY' or 'then ALL' response followups will be dispatched only to characters within this distance. | gamedll cheat |
| rr_thenany_score_slop | When computing respondents for a 'THEN ANY' rule, all rule-matching scores within this much of the best score will be considered. | gamedll archive cheat |
| snd_foliage_db_loss | foliage dB loss per 1200 units | gamedll cheat |
| player_debug_off_nav |  | gamedll cheat |
| ai_debug_off_nav |  | gamedll cheat |
| ai_show_current_nav |  | gamedll cheat |
| ai_use_visibility_cache |  | developmentonly gamedll |
| ai_force_serverside_ragdoll |  | developmentonly gamedll |
| phys_stressbodyweights |  | developmentonly gamedll |
| phys_impactforcescale |  | developmentonly gamedll |
| phys_vehicleimpactforcescale |  | developmentonly gamedll |
| phys_upimpactforcescale |  | developmentonly gamedll |
| target_scan_use_query_cache |  | developmentonly gamedll |
| ai_debug_los | NPC Line-Of-Sight debug mode. If 1, solid entities that block NPC LOC will be highlighted with white bounding boxes. If 2, it'll show non-solid entities that would do it if they were solid. | gamedll cheat |
| ai_expression_optimization | Disable npc background expressions when you can't see them. | developmentonly gamedll |
| ai_expression_frametime | Maximum frametime to still play background expressions. | developmentonly gamedll |
| sv_regeneration_wait_time |  | developmentonly gamedll replicated |
| buddha | Player takes damage but won't die | gamedll notify cheat |
| buddha_ignore_bots | Bots always buddha 0 | gamedll notify cheat |
| buddha_reset_hp | HP to set when damaged below zero in Buddha Mode | gamedll notify cheat |
| sk_player_head |  | developmentonly gamedll |
| sk_player_chest |  | developmentonly gamedll |
| sk_player_stomach |  | developmentonly gamedll |
| sk_player_arm |  | developmentonly gamedll |
| sk_player_leg |  | developmentonly gamedll |
| player_debug_print_damage | When true, print amount and type of all damage received by player to console. | gamedll cheat |
| spec_replay_winddown_time | The trailing time, in seconds, of replay past the event, including fade-out | gamedll release |
| vis_force |  | gamedll cheat |
| g_debug_doors |  | developmentonly gamedll |
| camera_datadriven_disable_cache |  | developmentonly gamedll cheat |
| tv_show_allchat |  | gamedll release |
| commentary_available | Automatically set by the game when a commentary file is available for the current map. | developmentonly gamedll |
| commentary | Desired commentary mode state. | gamedll archive |
| ai_debug_ragdoll_magnets |  | developmentonly gamedll |
| debug_visibility_monitor |  | gamedll cheat |
| vismon_poll_frequency |  | gamedll cheat |
| vismon_trace_limit |  | gamedll cheat |
| r_decals_overide_fadestarttime_params |  | developmentonly gamedll clientdll replicated missing3 |
| fire_maxabsorb |  | developmentonly gamedll |
| fire_absorbrate |  | developmentonly gamedll |
| fire_extscale |  | developmentonly gamedll |
| fire_extabsorb |  | developmentonly gamedll |
| fire_heatscale |  | developmentonly gamedll |
| fire_incomingheatscale |  | developmentonly gamedll |
| fire_dmgscale |  | developmentonly gamedll |
| fire_dmgbase |  | developmentonly gamedll |
| fire_growthrate |  | developmentonly gamedll |
| fire_dmginterval |  | developmentonly gamedll |
| fish_dormant | Turns off interactive fish behavior. Fish become immobile and unresponsive. | gamedll replicated cheat |
| func_break_max_pieces |  | gamedll archive replicated |
| func_break_reduction_factor |  | developmentonly gamedll |
| sv_showladders | Show bbox and dismount points for all ladders (must be set before level load.). | developmentonly gamedll |
| sv_ladder_slack_z_mult | Difference in Z increases toward the middle of the slack ladder.. | gamedll clientdll replicated cheat |
| shatterglass_debug |  | gamedll clientdll replicated cheat |
| shatterglass_cleanup |  | gamedll clientdll replicated cheat |
| shatterglass_cleanup_max |  | gamedll clientdll replicated cheat |
| shatterglass_shard_lifetime |  | gamedll clientdll replicated cheat |
| shatterglass_distort |  | gamedll clientdll replicated cheat |
| shatterglass_voronoi_size |  | gamedll clientdll replicated cheat |
| shatterglass_subdiv_size |  | gamedll clientdll replicated cheat |
| shatterglass_edge_uv_scale |  | gamedll clientdll replicated cheat |
| shatterglass_hit_tolerance |  | gamedll clientdll replicated cheat |
| servercfgfile |  | gamedll release |
| lservercfgfile |  | developmentonly gamedll |
| mp_teamplay |  | developmentonly gamedll notify |
| mp_forcerespawn |  | developmentonly gamedll notify |
| decalfrequency |  | developmentonly gamedll notify |
| sv_force_transmit_ents | Will transmit all entities to client, regardless of PVS conditions (will still skip based on transmit flags, however). | developmentonly gamedll |
| check_transmit_dump_ents |  | developmentonly gamedll |
| sv_parallel_checktransmit | Set to 1 to use threaded checkentities for transmit/pvs on listen servers, 2 for dedicated servers. | developmentonly gamedll |
| ent_steadystate_enable |  | developmentonly gamedll |
| ent_steadystate_delay | Time in seconds without network state changes until an entity is considered for trickle updates | developmentonly gamedll |
| net_debug_to_file |  | developmentonly gamedll |
| sv_server_side_animation |  | developmentonly gamedll |
| sv_dz_enable_respawn_solos |  | gamedll clientdll replicated release |
| sv_dz_show_weapon_spawns |  | developmentonly gamedll |
| sv_dz_show_security_door_item_price |  | developmentonly gamedll |
| sv_dz_zone_hex_radius |  | gamedll clientdll replicated release |
| sv_dz_zone_bombdrop_money_reward | How many money stacks players are rewarded each danger zone wave | gamedll clientdll replicated release |
| sv_dz_zone_bombdrop_money_reward_bonus | How many bonus money stacks players are rewarded each danger zone wave when they have the bonus item | gamedll clientdll replicated release |
| sv_dz_force_zone |  | gamedll clientdll replicated cheat |
| sv_dz_zone_damage |  | gamedll cheat release |
| mp_dronegun_stop | if non-zero, stops AI on all droneguns. | gamedll clientdll replicated release |
| sv_grassburn |  | gamedll clientdll replicated release missing3 |
| rr_debugrule | If set to the name of the rule, that rule's score will be shown whenever a concept is passed into the response rules system. | developmentonly gamedll clientdll replicated |
| rr_dumpresponses | Dump all response_rules.txt and rules (requires restart) | developmentonly gamedll clientdll replicated |
| rr_debugresponseconcept | If set, rr_debugresponseconcept will print only responses testing for the specified concept | developmentonly gamedll clientdll replicated |
| rr_debugresponses | Show verbose matching output (1 for simple, 2 for rule scoring, 3 for noisy). If set to 4, it will only show response success/failure for npc_selected NPCs. | developmentonly gamedll clientdll replicated |
| rr_debugclassname | If set, rr_debugclassname will print only response tests where 'classname' corresponds to this variable. Use to filter for a specific character. | developmentonly gamedll clientdll replicated |
| rr_dacmode | If set to 1, enable special functionality for DAC | developmentonly gamedll clientdll replicated |
| ragdoll_gravity_scale |  | gamedll clientdll replicated cheat |
| ragdoll_friction_scale |  | gamedll clientdll replicated cheat |
| animgraph_slope_enable |  | gamedll clientdll replicated cheat |
| phys_powered_ragdoll_debug |  | developmentonly gamedll clientdll replicated |
| footstep_audible_threshold |  | developmentonly gamedll clientdll replicated |
| animgraph_debug_tags |  | developmentonly gamedll clientdll replicated |
| animgraph_debug_set_filter_params | Comma separated list of params to filter against when drawing debug text overlays | developmentonly gamedll clientdll replicated |
| footstep_debug |  | developmentonly gamedll clientdll replicated |
| footstep_force_volume |  | developmentonly gamedll clientdll replicated |
| animgraph_debug_variables | Turn on to see animgraph variable changes for entities passing animgraph_debug_filterent. | developmentonly gamedll clientdll replicated |
| animgraph_debug_variables_ignore_missing | If set, animgraph_debug_variables won't show debug for warnings about sets to missing variables. | developmentonly gamedll clientdll replicated |
| animgraph_debug_variables_ignore_nonchanges | If set, animgraph_debug_variables won't show debug for variable sets that don't change the value. | developmentonly gamedll clientdll replicated |
| animgraph_debug_filterent | Filter setting for animgraph_debug_variables output. If set to -1, show debug for all entities. If set to 0, show debug for any NPCs that have been npc_selected. If set to &gt;0, something other than 0, show debug for the entity with the matching entindex. | developmentonly gamedll clientdll replicated |
| animgraph_enable | Enable animation graph | developmentonly gamedll clientdll replicated |
| animgraph_debug | Debug animation graph | gamedll clientdll replicated cheat |
| animgraph_debug_entindex | The entity to specifically debug | gamedll clientdll replicated cheat |
| animgraph_debug_animevents | Print info about animevents emitted by AnimGraph | developmentonly gamedll clientdll replicated |
| animgraph_record_all | Automatically start recording AnimGraphs when they get created, and save them to disk when they are destroyed | gamedll clientdll replicated cheat |
| sv_anim_queue_changes |  | developmentonly gamedll |
| sv_sequence_debug |  | developmentonly gamedll |
| sv_sequence_debug2 |  | developmentonly gamedll |
| sv_sequence_model_substring |  | developmentonly gamedll |
| anim_resetclientsideframe_old_behavior |  | developmentonly gamedll clientdll replicated |
| ai_sequence_debug |  | developmentonly gamedll clientdll replicated |
| r_cacheSequenceData |  | developmentonly gamedll clientdll replicated |
| fire_use_modifier |  | developmentonly gamedll clientdll replicated |
| sv_clockcorrection_msecs | The server tries to keep each player's m_nTickBase withing this many msecs of the server absolute tickcount | gamedll release |
| sv_usercmd_queue_spew_threshold | Spew warning if command queue has grown above this many backlogged commands. | gamedll release |
| ent_steadystate_interval | Rate at which entities can be trickled to players | developmentonly gamedll |
| ent_steadystate_batchsize | Max number of entities to transmit to player | developmentonly gamedll |
| sv_maxupdaterate | Maximum updates per second that the server will allow | gamedll clientdll replicated release |
| sv_minupdaterate | Minimum updates per second that the server will allow | gamedll clientdll replicated release |
| sv_client_min_interp_ratio | This can be used to limit the value of cl_interp_ratio for connected clients (only while they are connected)..              -1 = let clients set cl_interp_ratio to anything. any other value = set minimum value for cl_interp_ratio | developmentonly gamedll clientdll replicated |
| sv_client_max_interp_ratio | This can be used to limit the value of cl_interp_ratio for connected clients (only while they are connected). If sv_client_min_interp_ratio is -1, then this cvar has no effect. | developmentonly gamedll clientdll replicated |
| sv_client_predict | This can be used to force the value of cl_predict for connected clients (only while they are connected)..   -1 = let clients set cl_predict to anything.    0 = force cl_predict to 0.    1 = force cl_predict to 1 | developmentonly gamedll clientdll replicated |
| cq_enable | Run one usercmd per server tick and maintain a buffer.  Client speeds up/slows down it's usercmd tick rate to maintain server command queue buffering. | developmentonly gamedll clientdll replicated |
| cq_dilation_percentage | When speeding up slowing down, this is how much | developmentonly gamedll clientdll replicated |
| sv_showhitregistration | Display lag_compensated hitboxes. 0 = off, 1 = server only, 2 = client only, 3 = both server and client | gamedll clientdll replicated cheat |
| disable_dynamic_prop_loading | If non-zero when a map loads, dynamic props won't be loaded | gamedll cheat |
| breakable_multiplayer |  | developmentonly gamedll |
| func_breakdmg_bullet |  | developmentonly gamedll |
| func_breakdmg_club |  | developmentonly gamedll |
| func_breakdmg_explosive |  | developmentonly gamedll |
| ent_joint_axis_size |  | developmentonly gamedll |
| ent_joint_names |  | developmentonly gamedll |
| ent_joint_filter_substring |  | developmentonly gamedll |
| ent_joint_use_bind_pose |  | developmentonly gamedll |
| ent_joint_only_ik_joints |  | developmentonly gamedll |
| ent_skeleton_only_ik_joints |  | developmentonly gamedll |
| screenmessage_notifytime | How long to display screen message text | developmentonly gamedll |
| imgui_domain | 1 == client, 2 == server | developmentonly gamedll clientdll archive replicated cheat |
| imgui_enable | if imgui should display | developmentonly gamedll clientdll replicated cheat |
| imgui_enable_input | if imgui should consume input | developmentonly gamedll clientdll replicated cheat |
| ent_showonlyattachment |  | gamedll cheat |
| imgui_show_entity_browser | Game/Show Entity Browser | developmentonly gamedll clientdll archive replicated cheat menubar_item |
| imgui_show_command_tool | Game/Show Command Tool | developmentonly gamedll clientdll archive replicated cheat menubar_item |
| imgui_show_example_window | Source2/Show Example Window | developmentonly gamedll clientdll archive replicated cheat menubar_item |
| save_async |  | developmentonly gamedll |
| autosave_fully_async | Set to 1 to have autosaves execute completely on the save thread, forces 'render only' mode while the save completes | developmentonly gamedll |
| save_fake_hitch | Force a busy wait for the specified number of milliseconds during save to simulate a hitch | developmentonly gamedll |
| sv_autosave | Set to 1 to autosave game on level transition. Does not affect autosave triggers. | developmentonly gamedll replicated |
| save_screenshot | 0 = none, 1 = non-autosave, 2 = always, 3 = bug_only | developmentonly gamedll |
| save_history_count | Keep this many old copies in history of autosaves and quicksaves. | developmentonly gamedll |
| save_spew |  | developmentonly gamedll clientdll replicated |
| save_maxarray_spew | Max number of array entries to spew when using SaveRestoreIO spewing. | gamedll release |
| ent_messages_draw | Visualizes all entity input/output activity. | gamedll clientdll replicated cheat |
| net_showevents | Dump game events to console (1=client only, 2=all). | developmentonly gamedll |
| net_showeventlisteners | Show listening addition/removals | developmentonly gamedll |
| display_game_events |  | gamedll cheat |
| phys_visualize_traces |  | gamedll clientdll replicated cheat |
| gamestats_file_output_directory | When -gamestatsfileoutputonly is specified, file will be emitted here instead of to modpath. | developmentonly gamedll |
| smoothstairs | Smooth player eye z coordinate when traversing stairs. | developmentonly gamedll clientdll replicated |
| sv_suppress_viewpunch |  | developmentonly gamedll clientdll replicated cheat |
| in_button_double_press_window | How short the time between presses needs to be for us to consider it a double-press | developmentonly gamedll clientdll replicated |
| in_spewinput | Spew input, 0 = off, 1 = server, 2 = client, 3 = both | developmentonly gamedll clientdll replicated |
| in_spewbuttondelta | Spew button deltas, 0 = off, 1 = server, 2 = client, 3 = both | developmentonly gamedll clientdll replicated |
| in_spewbuttonhold | Spew button hold times, 0 = off, 1 = server, 2 = client, 3 = both | developmentonly gamedll clientdll replicated |
| in_spewent | Which entity should we spew input for? (Useful for debugging bot input) | developmentonly gamedll clientdll replicated |
| sv_fake_dropped_ucmd_interval |  | developmentonly gamedll |
| sv_noclipduringpause | If cheats are enabled, then you can noclip with the game paused (for doing screenshots, etc.). | gamedll clientdll replicated cheat |
| noclip_fixup |  | gamedll cheat |
| mp_forcecamera | Restricts spectator modes for dead players | gamedll clientdll replicated release missing3 |
| mp_allowspectators | toggles whether the server allows spectator mode or not | developmentonly gamedll clientdll replicated |
| sv_staminamax | Maximum stamina penalty | gamedll clientdll replicated release |
| sv_timebetweenducks | Minimum time before recognizing consecutive duck key | gamedll clientdll replicated release |
| sv_accelerate_use_weapon_speed |  | gamedll clientdll notify replicated release |
| sv_accelerate_debug_speed |  | gamedll clientdll notify replicated release |
| dev_cs_enable_new_move | Should we use new move code or just force legacy move. | developmentonly gamedll clientdll replicated |
| dev_cs_enable_consistent_jumps | Should we force subtick jump consistency. | developmentonly gamedll clientdll replicated |
| sv_extreme_strafe_accuracy_fishtail | Number of degrees of aim 'fishtail' when making an extreme strafe direction change | developmentonly gamedll clientdll replicated |
| sv_jump_impulse | Initial upward velocity for player jumps; sqrt(2*gravity*height). | gamedll clientdll replicated release |
| sv_jump_impulse_exojump_multiplier | ExoJump impulse multiplier | gamedll clientdll replicated release |
| sv_falldamage_exojump_multiplier | ExoJump fall damage multiplier | gamedll clientdll replicated release |
| sv_exojump_jumpbonus_up | ExoJump upwards bonus when holding the jump button | gamedll clientdll replicated release |
| sv_exojump_jumpbonus_forward | ExoJump forwards velocity bonus when duck jumping | gamedll clientdll replicated release |
| sv_exojump_soundramp |  | developmentonly gamedll clientdll replicated |
| sv_air_max_wishspeed |  | gamedll clientdll replicated release |
| sv_air_max_horizontal_parachute_speed |  | gamedll clientdll replicated release |
| sv_airaccelerate_parachute |  | gamedll clientdll replicated release |
| sv_airaccelerate_rappel |  | gamedll clientdll replicated release |
| sv_air_pushaway_dist |  | gamedll clientdll replicated release missing3 |
| view_punch_decay | Decay factor exponent for view punch | gamedll clientdll replicated cheat release |
| sv_ladder_dampen | Amount to dampen perpendicular movement on a ladder | developmentonly gamedll clientdll replicated |
| sv_ladder_angle | Cos of angle of incidence to ladder perpendicular for applying ladder_dampen | developmentonly gamedll clientdll replicated |
| sv_ladder_scale_speed | Scale top speed on ladders | gamedll clientdll replicated release |
| sv_falldamage_scale |  | gamedll clientdll replicated release |
| sv_runcmds |  | developmentonly gamedll |
| sv_max_usercmd_future_ticks | Prevents clients from running usercmds too far in the future. Prevents speed hacks. | developmentonly gamedll |
| bot_crouch |  | gamedll cheat |
| sv_optimizedmovement |  | developmentonly gamedll clientdll replicated |
| sv_enablebunnyhopping | Allow player speed to exceed maximum running speed | gamedll clientdll replicated release missing3 |
| sv_autobunnyhopping | Players automatically re-jump while holding jump button | gamedll clientdll replicated release missing3 |
| dev_create_bhop_reports | Whether we should create bhop reports when you jump. Reports are created for the client and server and are numbered monotonically | developmentonly gamedll clientdll replicated cheat |
| sv_weapon_encumbrance_scale |  | gamedll clientdll replicated release missing3 |
| spec_freeze_time | Time spend frozen in observer freeze cam. | gamedll clientdll replicated release missing3 |
| spec_freeze_traveltime | Time taken to zoom in to frame a target in observer freeze cam. | gamedll clientdll replicated release |
| spec_freeze_time_lock | Time players are prevented from skipping the freeze cam | gamedll clientdll replicated release |
| spec_freeze_deathanim_time | The time that the death cam will spend watching the player's ragdoll before going into the freeze death cam. | gamedll clientdll replicated release |
| sv_showplayerhitboxes | Show lag compensated hitboxes for the specified player index whenever a player fires. | developmentonly gamedll clientdll replicated |
| sv_spec_use_tournament_content_standards |  | gamedll clientdll replicated release |
| sv_min_jump_landing_sound |  | gamedll clientdll replicated release |
| sv_cs_player_speed_has_hostage |  | gamedll clientdll replicated release |
| slope_drop_debug | Toggles a test dropping the view offset based on the slope | developmentonly gamedll clientdll replicated |
| sv_weapon_encumbrance_per_item |  | gamedll clientdll replicated release missing3 |
| sv_server_verify_blood_on_player |  | gamedll clientdll replicated cheat |
| sv_max_distance_transmit_footsteps | Maximum distance to transmit footstep sound effects. | developmentonly gamedll clientdll replicated |
| dev_cs_force_disable_move | forcibly prevent players from moving | developmentonly gamedll clientdll replicated |
| slope_drop_enable | Toggles a test dropping the view offset based on the slope | developmentonly gamedll clientdll replicated |
| slope_drop_blend_max_speed | The max speed (in units/second) at which the slope offset can change | developmentonly gamedll clientdll replicated |
| slope_drop_blend_min_speed | The min speed (in units/second) at which the slope offset can change | developmentonly gamedll clientdll replicated |
| slope_drop_blend_max_distance | The distance when the max speed is used | developmentonly gamedll clientdll replicated |
| slope_drop_blend_min_distance | The distance when the min speed is used | developmentonly gamedll clientdll replicated |
| slope_drop_max_offset | The maximum distance to adjust the view height | developmentonly gamedll clientdll replicated |
| slope_drop_off_ground_blend_speed | The speed with which the slope drop is blended out when the entity leaves the ground | developmentonly gamedll clientdll replicated |
| slope_drop_debug_draw | Draw debug info for the slope drop | developmentonly gamedll clientdll replicated |
| cam_head_constraint_distance | Distance to constrain first/thirdperson camera and head | developmentonly gamedll clientdll replicated |
| cam_head_constraint_soft_transition | Constraint soft transition distance | developmentonly gamedll clientdll replicated |
| cam_head_constraint_debug | Show camera head constraint debug info | developmentonly gamedll clientdll replicated |
| dev_cs_ragdoll_progress_check_interval |  | developmentonly gamedll clientdll replicated |
| dev_cs_ragdoll_nudge_max_duration |  | developmentonly gamedll clientdll replicated |
| dev_cs_ragdoll_nudge_intensity |  | developmentonly gamedll clientdll replicated |
| dev_cs_ragdoll_head_ankle_delta_z_threshold |  | developmentonly gamedll clientdll replicated |
| player_ping_token_cooldown | Cooldown for how long it takes for a player's ping token to refresh allowing them to ping again (they get 5 tokens). | gamedll cheat release |
| player_use_radius |  | gamedll clientdll replicated cheat |
| sv_debug_player_use | Visualizes +use logic. Green cross=trace success, Red cross=trace too far, Green box=radius success | developmentonly gamedll clientdll replicated |
| sv_extract_ammo_from_dropped_weapons |  | gamedll clientdll replicated release missing3 |
| sv_guardian_refresh_ammo_for_items_on_waves | List of additional weapons to refill ammo on waves. | gamedll release missing3 |
| mp_drop_knife_enable | Allows players to drop knives. | gamedll release missing3 |
| mp_fists_replace_melee | If enabled then when melee weapon is dropped player will have fists, when melee weapon is picked up then fists are unavailable | gamedll release missing3 |
| mp_drop_grenade_enable | Allows players to drop grenades. | gamedll release missing3 |
| mp_weaponstay |  | developmentonly gamedll notify |
| sv_weapon_require_use_grace_period |  | gamedll release |
| sv_damage_print_enable | 0: no damage print in console. 1: damage print in console on death. 2: damage print in console only at next round restart. | gamedll clientdll replicated release missing3 |
| sv_dev_damage_use_netvars | Whether we should use network vars (true) or legacy messages (false). | developmentonly gamedll clientdll replicated |
| mp_logmoney | Enables money logging.  Values are: 0=off, 1=on | gamedll release |
| anim_scale_damped_movespeed |  | developmentonly gamedll clientdll replicated |
| anim_scale_damped_accel_mag16 |  | developmentonly gamedll clientdll replicated |
| anim_scale_damped_accel16 |  | developmentonly gamedll clientdll replicated |
| anim_scale_damped_accel32 |  | developmentonly gamedll clientdll replicated |
| anim_scale_overall_leans |  | developmentonly gamedll clientdll replicated |
| anim_scale_overall_hip_dip |  | developmentonly gamedll clientdll replicated |
| anim_scale_overall_arm_pump |  | developmentonly gamedll clientdll replicated |
| anim_scale_overall_counter_leans |  | developmentonly gamedll clientdll replicated |
| anim_scale_overall_hip_swivel |  | developmentonly gamedll clientdll replicated |
| anim_scale_wasd_input_leans |  | developmentonly gamedll clientdll replicated |
| anim_scale_wasd_input_hip_dip |  | developmentonly gamedll clientdll replicated |
| anim_scale_wasd_input_arm_pump |  | developmentonly gamedll clientdll replicated |
| anim_scale_wasd_input_counter_leans |  | developmentonly gamedll clientdll replicated |
| anim_scale_wasd_input_hip_swivel |  | developmentonly gamedll clientdll replicated |
| sv_dz_player_spawn_health |  | gamedll release |
| sv_dz_player_spawn_armor |  | gamedll release |
| sv_dz_player_max_health |  | gamedll release |
| sv_dz_jointeam_allowed | Whether non-server admins are allowed to use the dz_jointeam command | gamedll release |
| sv_force_reflections |  | gamedll clientdll replicated release missing3 |
| sv_dz_team_count | Max players allowed per team | gamedll clientdll replicated release |
| sv_dz_warmup_tablet |  | gamedll release |
| sv_dz_show_enemy_name_scope_range |  | gamedll release |
| sv_dz_respawn_wait_time_per_death |  | developmentonly gamedll |
| sv_dz_respawn_additional_wait_time_solo |  | developmentonly gamedll |
| sv_dz_respawn_pick_time |  | developmentonly gamedll |
| sv_dz_last_respawn_wave | Missile wave number to prevent respawns, &gt;5 will allow respawns on all waves | developmentonly gamedll |
| sv_dz_last_respawn_warning |  | developmentonly gamedll |
| sv_dz_enable_respawn |  | gamedll clientdll replicated release |
| cl_smoke_torus_ring_radius |  | developmentonly gamedll clientdll replicated |
| cl_smoke_torus_ring_subradius |  | developmentonly gamedll clientdll replicated |
| cl_smoke_edge_feather |  | developmentonly gamedll clientdll replicated |
| cl_smoke_lower_speed |  | developmentonly gamedll clientdll replicated |
| smoke_grenade_custom_color | 0 = Gray (classic), 1 = Red, 2 = Orange, 3 = Skyblue, 4 = Yellow, 5 = Green, , 6 = Blue, 7 = Purple, 8 = pink  | developmentonly gamedll |
| smoke_grenade_ct_color |  | developmentonly gamedll |
| smoke_grenade_t_color |  | developmentonly gamedll |
| smoke_param1 |  | developmentonly gamedll clientdll replicated |
| smoke_param2 |  | developmentonly gamedll clientdll replicated |
| smoke_param3 |  | developmentonly gamedll clientdll replicated |
| smoke_param4 |  | developmentonly gamedll clientdll replicated |
| smoke_param5 |  | developmentonly gamedll clientdll replicated |
| smoke_use_noise_texture |  | developmentonly gamedll clientdll replicated |
| sv_ignoregrenaderadio | Turn off Fire in the hole messages | gamedll release missing3 |
| sv_breachcharge_distance_min |  | gamedll release |
| sv_breachcharge_distance_max |  | gamedll release |
| sv_breachcharge_delay_min |  | gamedll release |
| sv_breachcharge_delay_max |  | gamedll release |
| sv_breachcharge_fuse_min |  | gamedll release |
| sv_breachcharge_fuse_max |  | gamedll release |
| sv_breachcharge_arm_delay |  | gamedll release |
| sv_bumpmine_arm_delay |  | gamedll release |
| sv_bumpmine_detonate_delay |  | gamedll release |
| mp_plant_c4_anywhere |  | gamedll clientdll replicated release missing3 |
| mp_guardian_bomb_plant_custom_x_mark_location | x,y,z to display an X for the bomb plant in guardian missions with custom bomb plant boundaries. | gamedll clientdll replicated release |
| weapon_land_dip_amt | The amount the gun should dip when the player lands after a jump. | developmentonly gamedll clientdll replicated cheat |
| weapon_accuracy_forcespread | Force spread to the specified value. | gamedll clientdll replicated release |
| weapon_accuracy_nospread | Disable weapon inaccuracy spread | gamedll clientdll replicated release missing3 |
| weapon_air_spread_scale | Scale factor for jumping inaccuracy, set to 0 to make jumping accuracy equal to standing | gamedll clientdll replicated release missing3 |
| weapon_reticle_knife_show | When enabled will show knife reticle on clients. Used for game modes requiring target id display when holding a knife. | gamedll clientdll replicated release missing3 |
| weapon_auto_cleanup_time | If set to non-zero, weapons will delete themselves after the specified time (in seconds) if no players are near. | gamedll clientdll replicated release |
| weapon_max_before_cleanup | If set to non-zero, will remove the oldest dropped weapon to maintain the specified number of dropped weapons in the world. | gamedll clientdll replicated release missing3 |
| weapon_sound_falloff_multiplier | Scaling for falloff of weapon firing sounds | gamedll clientdll replicated cheat release missing3 |
| dev_cs_frame_firing_enable | Enable that firing will pretend like it's happening on frames. | developmentonly gamedll clientdll replicated |
| dev_cs_frame_firing_tick_offset_enable | Should we offset the current frame to the tick | developmentonly gamedll clientdll replicated |
| dev_cs_frame_firing_skip_first_frame_enable | Should we skip the first frame of shooting to make the animation punchier? | developmentonly gamedll clientdll replicated |
| dev_cs_frame_firing_insert_idle_pose_now | Should we insert the idle pose at this time to make the animation interpolation punchier? | developmentonly gamedll clientdll replicated |
| dev_cs_frame_firing_play_animevents | Should we play the animevents that animgraph will skip over? | developmentonly gamedll clientdll replicated |
| sv_turning_inaccuracy_enabled |  | gamedll clientdll replicated cheat release |
| sv_turning_inaccuracy_angle_min |  | gamedll clientdll replicated cheat release |
| sv_turning_inaccuracy_decay |  | gamedll clientdll replicated cheat release |
| weapon_skin_force_legacy |  | developmentonly gamedll |
| weapon_accuracy_reset_on_deploy | On deploy, forcibly reset weapon accuracy to zero. | gamedll clientdll replicated cheat release |
| mp_weapon_next_owner_touch_time |  | gamedll cheat release |
| mp_weapon_prev_owner_touch_time |  | gamedll cheat release |
| sv_csgo_shoot_log |  | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_verify |  | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_assert_lagcompensation_error |  | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_lagcompensation_max_error | Warn if lag compensated head hitbox position doesn't match that on client. | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_verify_on_attack_only | Only run lag compensation error check when primary attack goes down. | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_use_full_interp |  | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_force_full_interp |  | developmentonly gamedll clientdll replicated |
| sv_csgo_shoot_force_use_target_time |  | developmentonly gamedll clientdll replicated |
| sv_fistpunch_damage |  | developmentonly gamedll clientdll replicated |
| sv_fistpunch_damage_to_player_multiplier |  | developmentonly gamedll clientdll replicated |
| sv_fistpunch_damage_hard |  | developmentonly gamedll clientdll replicated |
| sv_fistpunch_viewmove |  | developmentonly gamedll clientdll replicated |
| sv_fistpunch_impact_sounds |  | developmentonly gamedll clientdll replicated |
| sv_knife_attack_extend_from_player_aabb |  | gamedll clientdll replicated release missing3 |
| knife_damage_scale |  | developmentonly gamedll |
| mp_weapon_melee_touch_time_after_hit |  | gamedll cheat release |
| sv_shield_explosive_damage_scale |  | gamedll clientdll replicated release |
| sv_shield_explosive_damage_mult |  | gamedll clientdll replicated release |
| sv_shield_explosive_damage_cap |  | gamedll clientdll replicated release |
| sv_shield_explosive_damage_mindist |  | gamedll clientdll replicated release |
| sv_shield_explosive_damage_crouch_bonus |  | gamedll clientdll replicated release |
| sv_shield_hitpoints |  | gamedll clientdll replicated release |
| sv_shield_bash_damage_to_players |  | gamedll clientdll replicated release |
| sv_shield_bash_damage_to_nonplayer |  | gamedll clientdll replicated release |
| tablet_c4_dist_min |  | gamedll clientdll replicated release |
| tablet_c4_dist_max |  | gamedll clientdll replicated release |
| sv_tablet_show_path_to_nearest_resq |  | gamedll clientdll replicated release |
| sv_dz_exploration_payment_amount | Number of cash bundles to award for exploring a new sector | gamedll replicated release |
| sv_dz_exploration_payment_amount_bonus | Number of BONUS cash bundles to award for exploring (if the player has the item/upgrade) | gamedll replicated release |
| mp_taser_recharge_time | Determines recharge time for taser. -1 = disabled. | gamedll clientdll replicated release missing3 |
| sv_tripwirefire_trace_length |  | gamedll release |
| sv_spawn_afk_bomb_drop_time | Players that have never moved since they spawned will drop the bomb after this amount of time. | gamedll replicated release |
| sv_penetration_type | What type of penertration to use. 0 = old CS, 1 = new penetration | developmentonly gamedll clientdll replicated |
| sv_showimpacts_penetration | Shows extra data when bullets penetrate. (use sv_showimpacts_time to increase time shown) | gamedll clientdll replicated release |
| sv_showimpacts | Shows client (red) and server (blue) bullet impact point (1=both, 2=client-only, 3=server-only) | gamedll clientdll replicated release |
| sv_showimpacts_time | Duration bullet impact indicators remain before disappearing | gamedll clientdll replicated release |
| sv_showbullethits | 1=show hits and near misses, 2=show hits only | gamedll clientdll replicated release |
| ff_damage_reduction_grenade | How much to reduce damage done to teammates by a thrown grenade.  Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy) | gamedll clientdll replicated release missing3 |
| ff_damage_reduction_grenade_self | How much to damage a player does to himself with his own grenade.  Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy) | gamedll clientdll replicated release missing3 |
| ff_damage_reduction_bullets | How much to reduce damage done to teammates when shot.  Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy) | gamedll clientdll replicated release missing3 |
| ff_damage_reduction_other | How much to reduce damage done to teammates by things other than bullets and grenades.  Range is from 0 - 1 (with 1 being damage equal to what is done to an enemy) | gamedll clientdll replicated release missing3 |
| ff_damage_bullet_penetration | If friendly fire is off, this will scale the penetration power and damage a bullet does when penetrating another friendly player | gamedll clientdll replicated release missing3 |
| sv_clip_penetration_traces_to_players |  | developmentonly gamedll clientdll replicated |
| sv_nomvp | Disable MVP awards. | developmentonly gamedll |
| sv_disconnected_player_data_hold_time | Duration, in seconds, to hold onto the data of disconnected players, for scoreboard display. | gamedll clientdll replicated release |
| sv_mute_players_with_social_penalties |  | developmentonly gamedll |
| sv_guardian_extra_equipment_ct | Extra starting equipment for CT players in guardian modes | gamedll release missing3 |
| sv_guardian_extra_equipment_t | Extra starting equipment for Terrorist players in guardian modes | gamedll release missing3 |
| dev_create_move_report | Whether we should create move reports when you push movement keys. Reports are created for the server and are numbered monotonically | developmentonly gamedll clientdll replicated cheat |
| sv_update_animgraph_movement_in_finish | Whether we should update animgraph movement in FinishMove. | gamedll clientdll replicated cheat |
| sv_staminajumpcost | Stamina penalty for jumping | gamedll clientdll replicated release missing3 |
| sv_staminalandcost | Stamina penalty for landing | gamedll clientdll replicated release missing3 |
| sv_exostaminajumpcost | Stamina penalty for jumping with exo legs | gamedll clientdll replicated release |
| sv_exostaminalandcost | Stamina penalty for landing with exo legs | gamedll clientdll replicated release |
| sv_staminarecoveryrate | Rate at which stamina recovers (units/sec) | gamedll clientdll replicated release |
| mp_consecutive_loss_max |  | gamedll replicated release missing3 |
| contributionscore_assist | amount of contribution score added for an assist | gamedll release missing3 |
| contributionscore_kill | amount of contribution score added for a kill | gamedll release missing3 |
| contributionscore_objective_kill | amount of contribution score added for an objective related kill | gamedll release missing3 |
| contributionscore_hostage_rescue_minor | amount of contribution score added to all alive CTs per hostage rescued | gamedll release missing3 |
| contributionscore_hostage_rescue_major | amount of contribution score added to rescuer per hostage rescued | gamedll release missing3 |
| contributionscore_bomb_defuse_minor | amount of contribution score for defusing a bomb after eliminating enemy team | gamedll release missing3 |
| contributionscore_bomb_defuse_major | amount of contribution score for defusing a bomb while at least one enemy remains alive | gamedll release missing3 |
| contributionscore_bomb_planted | amount of contribution score for planting a bomb | gamedll release missing3 |
| contributionscore_bomb_exploded | amount of contribution score awarded to bomb planter and terrorists remaining alive if bomb explosion wins the round | gamedll release missing3 |
| contributionscore_suicide | amount of contribution score for a suicide, normally negative | gamedll release missing3 |
| contributionscore_team_kill | amount of contribution score for a team kill, normally negative | gamedll release missing3 |
| contributionscore_hostage_kill | amount of contribution score for killing a hostage, normally negative | gamedll release missing3 |
| contributionscore_cash_bundle | amount of contribution score for picking up a cash bundle | gamedll release missing3 |
| contributionscore_crate_break | amount of contribution score for breaking an item crate | gamedll release missing3 |
| contributionscore_kill_factor | percentage of victim's contribution score to award to their killer as a bonus | gamedll release missing3 |
| mp_guardian_draw_bounds |  | developmentonly gamedll |
| mp_endmatch_votenextmap_wargames_modes | Modes available for endmatch voting during War Games. Separate names with spaces. | gamedll release |
| mp_endmatch_votenextmap_wargames_nummaps | Maximum number of maps to include in endmatch voting during War Games | gamedll release |
| mp_endmatch_votenextmap_wargames_nummodes | Maximum number of other War Games to include in endmatch voting during War Games | gamedll release |
| mp_guardian_loc_string_hud | Loc string token to use on hud for this mission, otherwise default to kills with weapon. | gamedll clientdll replicated release missing3 |
| mp_guardian_loc_weapon | Override to weapon dialog var applied to UI | gamedll clientdll replicated release missing3 |
| cash_team_terrorist_win_bomb |  | gamedll clientdll notify replicated release missing3 |
| cash_team_elimination_hostage_map_t |  | gamedll clientdll notify replicated release missing3 |
| cash_team_elimination_hostage_map_ct |  | gamedll clientdll notify replicated release missing3 |
| cash_team_elimination_bomb_map |  | gamedll clientdll notify replicated release missing3 |
| cash_team_survive_guardian_wave |  | gamedll clientdll notify replicated release missing3 |
| cash_team_win_by_time_running_out_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_team_win_by_time_running_out_bomb |  | gamedll clientdll notify replicated release missing3 |
| cash_team_win_by_defusing_bomb |  | gamedll clientdll notify replicated release missing3 |
| cash_team_win_by_hostage_rescue |  | gamedll clientdll notify replicated release missing3 |
| cash_team_loser_bonus |  | gamedll clientdll notify replicated release missing3 |
| cash_team_loser_bonus_consecutive_rounds |  | gamedll clientdll notify replicated release missing3 |
| cash_team_winner_bonus_consecutive_rounds |  | gamedll clientdll notify replicated release |
| cash_team_rescued_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_team_hostage_alive |  | gamedll clientdll notify replicated release missing3 |
| cash_team_planted_bomb_but_defused |  | gamedll clientdll notify replicated release missing3 |
| cash_team_hostage_interaction |  | gamedll clientdll notify replicated release missing3 |
| cash_team_bonus_shorthanded |  | gamedll clientdll notify replicated release missing3 |
| cash_player_killed_teammate |  | gamedll clientdll notify replicated release missing3 |
| cash_player_killed_enemy_factor |  | gamedll clientdll notify replicated release missing3 |
| cash_player_killed_enemy_default |  | gamedll clientdll notify replicated release missing3 |
| cash_player_bomb_planted |  | gamedll clientdll notify replicated release missing3 |
| cash_player_bomb_defused |  | gamedll clientdll notify replicated release missing3 |
| cash_player_rescued_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_player_interact_with_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_player_damage_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_player_killed_hostage |  | gamedll clientdll notify replicated release missing3 |
| cash_player_respawn_amount |  | gamedll clientdll notify replicated release missing3 |
| cash_player_get_killed |  | gamedll clientdll notify replicated release missing3 |
| mp_guardian_give_random_grenades_to_bots | If set guardian bots will be given grenades at the beginning of the wave. | gamedll release missing3 |
| mp_solid_teammates | How solid are teammates: 0 = transparent; 1 = fully solid; 2 = can stand on top of heads | gamedll clientdll replicated release missing3 |
| mp_free_armor | Determines whether kevlar (1+) and/or helmet (2+) are given automatically. | gamedll clientdll replicated release missing3 |
| mp_max_armor | Determines the highest level of armor allowed to be purchased. (0) None, (1) Kevlar, (2) Helmet | gamedll clientdll replicated release missing3 |
| mp_halftime | Determines whether the match switches sides in a halftime event. | gamedll clientdll replicated release missing3 |
| mp_randomspawn | Determines whether players are to spawn. 0 = default; 1 = both teams; 2 = Terrorists; 3 = CTs. | gamedll clientdll replicated release missing3 |
| mp_randomspawn_los | If using mp_randomspawn, determines whether to test Line of Sight when spawning. | gamedll clientdll replicated release missing3 |
| mp_randomspawn_dist | If using mp_randomspawn, determines whether to test distance when selecting this spot. | gamedll clientdll replicated release missing3 |
| sv_competitive_minspec | Enable to force certain client convars to minimum/maximum values to help prevent competitive advantages. | gamedll clientdll notify replicated release |
| mp_retake_t_count | Number of terrorists when playing retakes. | gamedll clientdll replicated release |
| mp_retake_ct_count | Number of CT's when playing retakes. | gamedll clientdll replicated release |
| mp_retake_ct_loadout_default_pistol_round | CT Loadouts for default pistol round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_upgraded_pistol_round | CT Loadouts for upgraded pistol round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_light_buy_round | CT Loadouts for force buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_full_buy_round | CT Loadouts for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_bonus_card_availability | CT bonus card availability pattern for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_bonus_card | CT bonus card for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_ct_loadout_enemy_card | CT enemy card for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_default_pistol_round | T Loadouts for default pistol round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_upgraded_pistol_round | T Loadouts for upgraded pistol round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_light_buy_round | T Loadouts for force buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_full_buy_round | T Loadouts for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_bonus_card_availability | T bonus card availability pattern for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_bonus_card | T bonus card for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_t_loadout_enemy_card | T enemy card for full buy round when playing bomb site retake. | gamedll clientdll replicated release missing3 |
| mp_retake_max_consecutive_rounds_same_target_site | Limit the number of consecutive rounds targeting the same site. | gamedll clientdll replicated release missing3 |
| mp_teammates_are_enemies | When set, your teammates act as enemies and all players are valid targets. | gamedll clientdll notify replicated release missing3 |
| mp_buy_anywhere | When set, players can buy anywhere, not only in buyzones. 0 = default. 1 = both teams. 2 = Terrorists. 3 = Counter-Terrorists. | gamedll clientdll notify replicated release missing3 |
| mp_buy_during_immunity | When set, players can buy when immune, ignoring buytime. 0 = default. 1 = both teams. 2 = Terrorists. 3 = Counter-Terrorists. | gamedll clientdll notify replicated release missing3 |
| sv_pushaway_force | How hard physics objects are pushed away from the players on the server. | developmentonly gamedll clientdll replicated |
| sv_pushaway_min_player_speed | If a player is moving slower than this, don't push away physics objects (enables ducking behind things). | developmentonly gamedll clientdll replicated |
| sv_pushaway_max_force | Maximum amount of force applied to physics objects by players. | developmentonly gamedll clientdll replicated |
| sv_pushaway_clientside | Clientside physics push away (0=off, 1=only localplayer, 1=all players) | developmentonly gamedll clientdll replicated |
| sv_pushaway_player_force | How hard the player is pushed away from physics objects (falls off with inverse square of distance). | developmentonly gamedll clientdll replicated cheat |
| sv_pushaway_max_player_force | Maximum of how hard the player is pushed away from physics objects. | developmentonly gamedll clientdll replicated cheat |
| sv_turbophysics | Turns on turbo physics | developmentonly gamedll clientdll replicated |
| steamworks_sessionid_server | The server session ID for the new steamworks gamestats. | developmentonly gamedll hidden clientdll replicated |
| sv_grenade_trajectory_time_spectator | Length of time grenade trajectory remains visible as a spectator. | gamedll clientdll replicated release missing3 |
| sv_grenade_trajectory_prac_trailtime | Shows grenade trajectory practice visualization for this number of seconds. | gamedll clientdll replicated release missing3 |
| sv_grenade_trajectory_prac_pipreview | Shows grenade trajectory practice picture-in-picture preview. | gamedll clientdll replicated release missing3 |
| vm_debug |  | developmentonly gamedll clientdll replicated |
| healthshot_health |  | gamedll clientdll replicated release missing3 |
| healthshot_healthboost_time |  | gamedll clientdll replicated release missing3 |
| healthshot_healthboost_speed_multiplier |  | gamedll clientdll replicated release missing3 |
| healthshot_allow_use_at_full |  | gamedll clientdll replicated release missing3 |
| sv_health_approach_enabled |  | gamedll replicated release missing3 |
| sv_health_approach_speed |  | gamedll replicated release missing3 |
| molotov_throw_detonate_time |  | gamedll clientdll replicated release missing3 |
| weapon_molotov_maxdetonateslope | Maximum angle of slope on which the molotov will detonate | developmentonly gamedll clientdll replicated |
| cl_smoke_origin_height |  | developmentonly gamedll clientdll replicated |
| mp_death_drop_defuser | Drop defuser on player death | gamedll clientdll replicated release missing3 |
| mp_death_drop_taser | Drop taser on player death | gamedll clientdll replicated release |
| mp_death_drop_breachcharge | Drop breachcharge on player death | gamedll clientdll replicated release |
| mp_death_drop_healthshot | Drop healthshot on player death | gamedll clientdll replicated release |
| mp_coop_force_join_ct | If set, real players will auto join CT on join. | gamedll clientdll replicated release missing3 |
| mp_coopterrorhunt_num_enemies | The number of enemies CTs have to hunt and kill. | gamedll clientdll replicated release |
| mp_coopterrorhunt_kill_add_time | The number of seconds added to the clock when players get a kill. | gamedll clientdll replicated release |
| mp_coopmission_mission_number | Which mission the map should run after it loads. | gamedll clientdll replicated release missing3 |
| mp_force_pick_time | The amount of time a player has on the team screen to make a selection before being auto-teamed | gamedll clientdll replicated release missing3 |
| bot_autodifficulty_threshold_low | Lower bound below Average Human Contribution Score that a bot must be below to change its difficulty | gamedll clientdll replicated release missing3 |
| bot_autodifficulty_threshold_high | Upper bound above Average Human Contribution Score that a bot must be above to change its difficulty | gamedll clientdll replicated release missing3 |
| mp_equipment_reset_rounds | Reset all player equipment every N rounds (0 for never) | gamedll clientdll replicated release missing3 |
| mp_economy_reset_rounds | Reset all player money every N rounds (0 for never) | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_zeus | Determines how many Zeus purchases a player can make per round (0 to disallow, -1 to have no limit). | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_pistols | Determines which team, if any, can purchase Pistols. -1 = any; 0 = non; 2 = Ts; 3 = CTs. | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_smgs | Determines which team, if any, can purchase SMGs. -1 = any; 0 = non; 2 = Ts; 3 = CTs. | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_heavy | Determines which team, if any, can purchase Heavy guns. -1 = any; 0 = non; 2 = Ts; 3 = CTs. | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_rifles | Determines which team, if any, can purchase Rifles. -1 = any; 0 = non; 2 = Ts; 3 = CTs. | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_heavyassaultsuit | Determines whether heavyassaultsuit is permitted. | gamedll clientdll replicated release missing3 |
| mp_heavyassaultsuit_cooldown | Determines cooldown of purchase. | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_typecount | Determines how many purchases of each weapon type allowed per player per round (0 to disallow purchasing, -1 to have no limit). | gamedll clientdll replicated release missing3 |
| mp_weapons_allow_map_placed | If this convar is set, when a match starts, the game will not delete weapons placed in the map. | gamedll clientdll replicated release missing3 |
| mp_default_team_winner_no_objective | If the map doesn't define an objective (bomb, hostage, etc), the value of this convar will declare the winner when the time runs out in the round. | gamedll clientdll replicated release missing3 |
| mp_weapons_glow_on_ground | If this convar is set, weapons on the ground will have a glow around them. | gamedll clientdll replicated release missing3 |
| mp_respawn_on_death_t | When set to 1, terrorists will respawn after dying. | gamedll clientdll replicated release missing3 |
| mp_respawn_on_death_ct | When set to 1, counter-terrorists will respawn after dying. | gamedll clientdll replicated release missing3 |
| mp_use_respawn_waves | When set to 1, and that player's team is set to respawn, they will respawn in waves. If set to 2, teams will respawn when the whole team is dead. | gamedll clientdll replicated release missing3 |
| mp_tdm_healthshot_killcount | Grant healthshots in team deathmatch after n kills | gamedll clientdll replicated release |
| mp_ggprogressive_healthshot_killcount | Grant healthshots in arms race after n kills | gamedll clientdll replicated release missing3 |
| mp_items_prohibited | Set this convar to a comma-delimited list of definition indices of weapons that should be prohibited from use. | gamedll clientdll replicated release missing3 |
| mp_respawnwavetime_ct | Time between respawn waves for CTs. | gamedll clientdll replicated release missing3 |
| mp_respawnwavetime_t | Time between respawn waves for Terrorists. | gamedll clientdll replicated release missing3 |
| tr_completed_training | Whether the local player has completed the initial training portion of the training map | developmentonly gamedll archive per_user |
| tr_best_course_time | The player's best time for the timed obstacle course | developmentonly gamedll archive per_user |
| tr_valve_course_time | Valve's best time for the timed obstacle course | developmentonly gamedll |
| mp_competitive_endofmatch_extra_time | After a competitive match finishes rematch voting extra time is given for rankings. | gamedll release |
| mp_endmatch_votenextmap | Whether or not players vote for the next map at the end of the match when the final scoreboard comes up | gamedll clientdll replicated release |
| mp_endmatch_votenextmap_keepcurrent | If set, keeps the current map in the list of voting options.  If not set, the current map will not appear in the list of voting options. | gamedll clientdll replicated release |
| mp_endmatch_votenextleveltime | If mp_endmatch_votenextmap is set, players have this much time to vote on the next map at match end. | gamedll release |
| sv_endmatch_item_drop_interval | The time between drops on the end match scoreboard  | developmentonly gamedll clientdll replicated |
| sv_endmatch_item_drop_interval_rare | The time between drops on the end match scoreboard for rare items  | developmentonly gamedll clientdll replicated |
| sv_endmatch_item_drop_interval_mythical | The time between drops on the end match scoreboard for mythical items  | developmentonly gamedll clientdll replicated |
| sv_endmatch_item_drop_interval_legendary | The time between drops on the end match scoreboard for legendary items  | developmentonly gamedll clientdll replicated |
| sv_endmatch_item_drop_interval_ancient | The time between drops on the end match scoreboard for ancient items  | developmentonly gamedll clientdll replicated |
| sv_compute_per_bot_difficulty | 0 = compute all bot difficulties equally, 1 = compute unique bot difficulty for each bot  | developmentonly gamedll clientdll replicated |
| sv_show_bot_difficulty_in_name | 0 = hide bot difficulty in bot name, 1 = show bot difficulty in bot name | developmentonly gamedll clientdll replicated |
| sv_bot_difficulty_kbm | Bot difficulty while playing with Keyboard/Mouse device | developmentonly gamedll hidden clientdll replicated |
| sv_kick_ban_duration | How long should a kick ban from the server should last (in minutes) | gamedll clientdll notify replicated release |
| sv_disable_immunity_alpha | If set, clients won't slam the player model render settings each frame for immunity [mod authors use this] | gamedll clientdll replicated release missing3 |
| sv_deadtalk | Dead players can speak (voice, text) to the living | gamedll clientdll notify replicated release missing3 |
| sv_full_alltalk | Any player (including Spectator team) can speak to any other player | gamedll clientdll replicated release |
| sv_talk_enemy_dead | Dead players can hear all dead enemy communication (voice, chat) | gamedll clientdll replicated release missing3 |
| sv_talk_enemy_living | Living players can hear all living enemy communication (voice, chat) | gamedll clientdll replicated release missing3 |
| sv_talk_after_dying_time | The number of seconds a player can continue talking after dying as if they were still alive | gamedll clientdll replicated release |
| sv_auto_full_alltalk_during_warmup_half_end | When enabled will automatically turn on full all talk mode in warmup, at halftime and at the end of the match | gamedll release missing3 |
| sv_spec_hear | Determines who spectators can hear: 0: only spectators; 1: all players; 2: spectated team; 3: self only; 4: nobody | gamedll clientdll notify replicated release |
| mp_c4timer | how long from when the C4 is armed until it blows | gamedll clientdll notify replicated release missing3 |
| dev_reportmoneychanges | Displays money account changes for players in the console | developmentonly gamedll replicated |
| mp_roundtime | How many minutes each round takes. | gamedll notify replicated release missing3 |
| mp_roundtime_deployment | How many minutes deployment for coop mission takes. | gamedll release |
| mp_roundtime_hostage | How many minutes each round of Hostage Rescue takes. If 0 then use mp_roundtime instead. | gamedll notify replicated release missing3 |
| mp_roundtime_defuse | How many minutes each round of Bomb Defuse takes. If 0 then use mp_roundtime instead. | gamedll notify replicated release missing3 |
| mp_team_intro_time | How many seconds for team intro | gamedll notify replicated release missing3 |
| mp_freezetime | how many seconds to keep players frozen when the round starts | gamedll notify replicated release missing3 |
| mp_limitteams | Max # of players 1 team can have over another (0 disables check) | gamedll notify replicated release missing3 |
| mp_tkpunish | Will TK'ers and team damagers be punished in the next round?  {0=no,  1=yes} | gamedll replicated release |
| mp_autokick | Kick idle/team-killing/team-damaging players | gamedll replicated release missing3 |
| mp_suicide_penalty | Punish players for suicides | gamedll release missing3 |
| mp_spawnprotectiontime | Kick players who team-kill within this many seconds of a round restart. | gamedll replicated release |
| mp_td_spawndmgthreshold | The damage threshold players have to exceed at the start of the round to be warned/kick. | gamedll replicated release |
| mp_td_dmgtowarn | The damage threshhold players have to exceed in a match to get warned that they are about to be kicked. | gamedll replicated release |
| mp_td_dmgtokick | The damage threshhold players have to exceed in a match to get kicked. | gamedll replicated release |
| mp_humanteam | Restricts human players to a single team {any, CT, T} | gamedll replicated release |
| mp_guardian_special_kills_needed | The number of kills needed with a specific weapon. | gamedll replicated release missing3 |
| mp_guardian_special_weapon_needed | The weapon that needs to be used to increment the kills needed to complete the mission. | gamedll replicated release missing3 |
| mp_guardian_player_dist_min | The distance at which we start to warn a player when they are too far from the guarded bombsite. | gamedll replicated release missing3 |
| mp_guardian_player_dist_max | The maximum distance a player is allowed to get from the bombsite before they're killed. | gamedll replicated release missing3 |
| mp_guardian_bot_money_per_wave | The amount of money bots get time each wave the players complete.  This # is absolute and not additive, the money is set to (this)x(wave#) for each bot on each wave. | gamedll replicated release missing3 |
| mp_guardian_ai_bt_difficulty_adjust_wave_interval | Adjust the guardian bots' difficulty every nth guardian wave when using behavior trees. | gamedll replicated release missing3 |
| mp_guardian_ai_bt_difficulty_max_next_level_bots | How many bots to increase difficulty per wave - this many easier bots will get harder. | gamedll replicated release missing3 |
| mp_guardian_ai_bt_difficulty_cap_beginning_round | Starting this round a difficulty cap will be applied to the bots. | gamedll replicated release missing3 |
| mp_guardian_ai_bt_difficulty_initial_value | Starting difficulty level for the gardian bots. | gamedll replicated release missing3 |
| mp_ignore_round_win_conditions | Ignore conditions which would end the current round | gamedll replicated release |
| mp_dm_time_between_bonus_min | Minimum time a bonus time will start after the round start or after the last bonus (in seconds) | gamedll replicated release |
| mp_dm_time_between_bonus_max | Maximum time a bonus time will start after the round start or after the last bonus (in seconds) | gamedll replicated release |
| mp_dm_bonus_length_min | Minimum time the bonus time will last (in seconds) | gamedll replicated release |
| mp_dm_bonus_length_max | Maximum time the bonus time will last (in seconds) | gamedll replicated release |
| mp_dogtag_pickup_rule | Who is eligible to pick up a dogtag (0 = killer only, 1 = killer's team, 2 = victim's team, 3 = killer & victim's team, 4 = anyone) | gamedll replicated release missing3 |
| mp_dogtag_despawn_on_killer_death | Whether dogtags should despawn when their killer dies | gamedll replicated release missing3 |
| mp_dogtag_despawn_time | How many seconds dogtags should stay around before despawning automatically (0 = infinite) | gamedll replicated release missing3 |
| mp_damage_scale_ct_body | Scales the damage a CT player takes by this much when they take damage in the body. (1 == 100%, 0.5 == 50%) | gamedll replicated release missing3 |
| mp_damage_scale_ct_head | Scales the damage a CT player takes by this much when they take damage in the head (1 == 100%, 0.5 == 50%).  REMEMBER! headshots do 4x the damage of the body before this scaler is applied. | gamedll replicated release missing3 |
| mp_damage_scale_t_body | Scales the damage a T player takes by this much when they take damage in the body. (1 == 100%, 0.5 == 50%) | gamedll replicated release missing3 |
| mp_damage_scale_t_head | Scales the damage a T player takes by this much when they take damage in the head (1 == 100%, 0.5 == 50%).        REMEMBER! headshots do 4x the damage of the body before this scaler is applied. | gamedll replicated release missing3 |
| mp_damage_headshot_only | Determines whether non-headshot hits do any damage. | gamedll replicated release missing3 |
| mp_weapon_self_inflict_amount | If Set to non-0, will hurt the attacker by the specified fraction of max damage if they miss. | gamedll replicated release missing3 |
| mp_damage_vampiric_amount | If Set to non-0, will determine the fraction of damage dealt that will be given to attacker. | gamedll replicated release missing3 |
| mp_global_damage_per_second | If above 0, deal non-lethal damage to players over time. | gamedll replicated release missing3 |
| mp_starting_losses | Determines what the initial loss streak is. | gamedll replicated release missing3 |
| mp_consecutive_loss_aversion | How loss streak is affected with round win: 0 = win fully resets loss bonus, 1 = first win steps down loss bonus, 2 = first win holds loss bonus and step down starting with second win | gamedll replicated release |
| mp_heavybot_damage_reduction_scale | How much damage should scale when the player wearing the heavy assault suit is shot (1.0 = no change, 0.5 = half damage) | gamedll clientdll replicated release missing3 |
| mp_heavyassaultsuit_deploy_timescale | How fast a player wearing the heavy assault suit will draw their weapon (1.0 = normal speed, 0.5 = half speed) | gamedll clientdll replicated release missing3 |
| mp_heavyassaultsuit_aimpunch | How much EXTRA aim punch will happen when a player wearing the assault suit gets when shot | gamedll clientdll replicated release missing3 |
| mp_shield_speed_deployed | The max speed of a player when they have a shield deployed | gamedll clientdll replicated release |
| mp_shield_speed_holstered | The max speed of a player when they have a shield holstered | gamedll clientdll replicated release |
| mp_backup_round_auto | If enabled will keep in-memory backups to handle reconnecting players even if the backup files aren't written to disk | gamedll release |
| mp_backup_round_file | If set then server will save all played rounds information to files filename_date_time_team1_team2_mapname_roundnum_score1_score2.txt | gamedll release |
| mp_backup_round_file_pattern | If set then server will save all played rounds information to files named by this pattern, e.g.'%prefix%_%date%_%time%_%team1%_%team2%_%map%_round%round%_score_%score1%_%score2%.txt' | gamedll release |
| mp_backup_round_file_last | Every time a backup file is written the value of this convar gets updated to hold the name of the backup file. | gamedll release |
| mp_backup_restore_load_autopause | Whether to automatically pause the match after restoring round data from backup | gamedll release |
| mp_spec_swapplayersides | Toggle set the player names and team names to the opposite side in which they are are on the spectator panel. | gamedll clientdll replicated release |
| sv_gameinstructor_disable | Force all clients to disable their game instructors. | gamedll clientdll replicated release |
| cs_AssistDamageThreshold | cs_AssistDamageThreshold defines the amount of damage needed to score an assist | developmentonly gamedll |
| sv_matchpause_auto_5v5 | When enabled will automatically pause the match at next freeze time if less than 5 players are connected on each team. | gamedll clientdll replicated release |
| mp_spectators_max | How many spectators are allowed in a match. | gamedll clientdll replicated release |
| mp_buytime | How many seconds after round start players can buy items for. | gamedll clientdll replicated release missing3 |
| mp_buy_allow_grenades | Whether players can purchase grenades from the buy menu or not. | gamedll clientdll replicated release missing3 |
| mp_buy_allow_guns | Whether players can purchase guns: pistols (1), SMGs (2), rifles (4), shotguns (8), sniper rifles (16), heavy MGs (32). | gamedll clientdll replicated release missing3 |
| mp_warmup_online_enabled | Whether or not to do a warmup period at the start of an online match. | gamedll clientdll replicated release |
| mp_warmup_offline_enabled | Whether or not to do a warmup period at the start of a match in an offline (bot) match. | gamedll clientdll replicated release |
| mp_startmoney | amount of money each player gets when they reset | gamedll clientdll replicated release missing3 |
| mp_maxmoney | maximum amount of money allowed in a player's account | gamedll clientdll replicated release missing3 |
| mp_afterroundmoney | amount of money awared to every player after each round | gamedll clientdll replicated release missing3 |
| mp_playercashawards | Players can earn money by performing in-game actions | gamedll clientdll replicated release missing3 |
| mp_teamcashawards | Teams can earn money by performing in-game actions | gamedll clientdll replicated release missing3 |
| mp_overtime_enable | If a match ends in a tie, use overtime rules to determine winner | gamedll clientdll replicated release |
| mp_overtime_maxrounds | When overtime is enabled play additional rounds to determine winner | gamedll clientdll replicated release |
| mp_overtime_startmoney | Money assigned to all players at start of every overtime half | gamedll clientdll replicated release |
| mp_hostages_takedamage | Whether or not hostages can be hurt. | gamedll clientdll replicated release |
| mp_hostages_rescuetowin | 0 == all alive, any other number is the number the CT's need to rescue to win the round. | developmentonly gamedll clientdll replicated |
| mp_hostages_rescuetime | Additional time added to round time if a hostage is reached by a CT. | gamedll clientdll replicated release |
| mp_anyone_can_pickup_c4 | If set, everyone can pick up the c4, not just Ts. | gamedll clientdll replicated release missing3 |
| mp_c4_cannot_be_defused | If set, the planted c4 cannot be defused. | gamedll clientdll replicated release missing3 |
| sv_coaching_enabled | Allows spectating and communicating with a team ( 'coach t' or 'coach ct' ) | developmentonly gamedll clientdll replicated release |
| sv_allow_thirdperson | Allows the server set players in third person mode without the client slamming it back (if cheats are on, all clients can set thirdperson without this convar being set) | gamedll clientdll replicated release |
| sv_party_mode | Party!! | gamedll clientdll replicated release |
| sv_dz_hostage_rescue_reward | Number of cash bundles to award for rescuing a hostage | gamedll clientdll replicated release |
| sv_dz_squad_wipe_reward | Number of cash bundles to award for eliminating a squad | gamedll clientdll replicated release |
| mp_shorthanded_cash_bonus_round_delay | number of previous rounds that a team needs to have been shorthanded before they are eligible for the short-handed bonus | gamedll clientdll replicated release |
| mp_shorthanded_cash_bonus_ignore_kicked | Determines whether kicked players are included in the assessment for short-handedness | gamedll clientdll replicated release |
| mp_disconnect_kills_players | When a player disconnects, kill them first (triggering item drops, stats, etc.) | gamedll release |
| mp_disconnect_kills_bots | When a bot disconnects, kill them first.  Requires mp_disconnect_kills_players. | gamedll release |
| mp_verbose_changelevel_spew |  | gamedll clientdll replicated release |
| mp_warmuptime | How long the warmup period lasts. Changing this value resets warmup. | gamedll clientdll replicated release missing3 |
| mp_warmuptime_all_players_connected | Warmup time to use when all players have connected. 0 to disable. | gamedll clientdll replicated release missing3 |
| mp_endwarmup_player_count | Number of players required to be connected to end warmup early. 0 to require maximum players for mode. | gamedll clientdll replicated release |
| mp_warmup_pausetimer | Set to 1 to stay in warmup indefinitely. Set to 0 to resume the timer. | gamedll clientdll replicated release missing3 |
| mp_halftime_pausetimer | Set to 1 to stay in halftime indefinitely. Set to 0 to resume the timer. | gamedll clientdll replicated release missing3 |
| mp_halftime_pausematch | Set to 1 to pause match after halftime countdown elapses. Match must be resumed by vote or admin. | gamedll clientdll replicated release |
| mp_overtime_halftime_pausetimer | If set to 1 will set mp_halftime_pausetimer to 1 before every half of overtime. Set mp_halftime_pausetimer to 0 to resume the timer. | gamedll clientdll replicated release |
| mp_respawn_immunitytime | How many seconds after respawn immunity lasts. Set to negative value to disable warmup immunity. | gamedll clientdll replicated release missing3 |
| mp_playerid | Controls what information player see in the status bar: 0 all names; 1 team names; 2 no names | gamedll clientdll replicated release |
| mp_playerid_delay | Number of seconds to delay showing information in the status bar | gamedll clientdll replicated release |
| mp_playerid_hold | Number of seconds to keep showing old information in the status bar | gamedll clientdll replicated release |
| mp_round_restart_delay | Number of seconds to delay before restarting a round after a win | gamedll clientdll replicated release missing3 |
| mp_halftime_duration | Target number of seconds that halftime lasts; shortened if team intros are active | gamedll clientdll replicated release |
| mp_min_halftime_duration | Minimum number of seconds that halftime lasts even if team intros are active | gamedll clientdll replicated release |
| mp_match_can_clinch | Can a team clinch and end the match by being so far ahead that the other team has no way to catching up? | gamedll clientdll replicated release missing3 |
| mp_ggtr_always_upgrade | Award this many upgrade points every round in demolition mode | gamedll clientdll replicated release missing3 |
| mp_ggtr_end_round_kill_bonus | Number of bonus points awarded in Demolition Mode when knife kill ends round | gamedll clientdll replicated release missing3 |
| mp_ggtr_last_weapon_kill_ends_half | End the half and give a team round point when a player makes a kill using the final weapon | gamedll clientdll replicated release missing3 |
| mp_ggprogressive_round_restart_delay | Number of seconds to delay before restarting a round after a win in gungame progessive | gamedll clientdll replicated release missing3 |
| mp_ggprogressive_use_random_weapons | If set, selects random weapons from set categories for the progression order | gamedll clientdll replicated release |
| mp_ggprogressive_random_weapon_kills_needed | If mp_ggprogressive_use_random_weapons is set, this is the number of kills needed with each weapon | gamedll clientdll replicated release |
| mp_ggtr_num_rounds_autoprogress | Upgrade the player's weapon after this number of rounds without upgrading | gamedll clientdll replicated release |
| mp_ct_default_melee | The default melee weapon that the CTs will spawn with.       Even if this is blank, a knife will be given.  To give a taser, it should look like this: 'weapon_knife weapon_taser'.  Remember to set mp_weapons_allow_zeus to 1 if you want to give a taser! | gamedll clientdll replicated release missing3 |
| mp_ct_default_secondary | The default secondary (pistol) weapon that the CTs will spawn with | gamedll clientdll replicated release missing3 |
| mp_ct_default_primary | The default primary (rifle) weapon that the CTs will spawn with | gamedll clientdll replicated release missing3 |
| mp_ct_default_grenades | The default grenades that the CTs will spawn with.        To give multiple grenades, separate each weapon class with a space like this: 'weapon_molotov weapon_hegrenade' | gamedll clientdll replicated release missing3 |
| mp_t_default_melee | The default melee weapon that the Ts will spawn with | gamedll clientdll replicated release missing3 |
| mp_t_default_secondary | The default secondary (pistol) weapon that the Ts will spawn with | gamedll clientdll replicated release missing3 |
| mp_t_default_primary | The default primary (rifle) weapon that the Ts will spawn with | gamedll clientdll replicated release missing3 |
| mp_t_default_grenades | The default grenades that the Ts will spawn with. To give multiple grenades, separate each weapon class with a space like this: 'weapon_molotov weapon_hegrenade' | gamedll clientdll replicated release missing3 |
| mp_join_grace_time | Number of seconds after round start to allow a player to join a game | gamedll clientdll replicated release |
| mp_win_panel_display_time | The amount of time to show the win panel between matches / halfs | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_pts_for_upgrade | Kill points required to upgrade a player's weapon | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_pts_for_he | Kill points required in a round to get a bonus HE grenade | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_pts_for_flash | Kill points required in a round to get a bonus flash grenade | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_pts_for_molotov | Kill points required in a round to get a bonus molotov cocktail | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_respawn_delay | Number of seconds to delay before making the bomb available to a respawner in gun game | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_defuse_bonus | Number of bonus upgrades to award the CTs when they defuse a gun game bomb | gamedll clientdll replicated release missing3 |
| mp_ggtr_bomb_detonation_bonus | Number of bonus upgrades to award the Ts when they detonate a gun game bomb | gamedll clientdll replicated release missing3 |
| mp_dm_kill_base_score | Number of base points to award for a kill in deathmatch.  Cheaper weapons award 1 or 2 additional points. | gamedll clientdll replicated release missing3 |
| mp_dm_bonus_percent | Percent of points additionally awarded when someone gets a kill with the bonus weapon during the bonus period. | gamedll clientdll replicated release missing3 |
| mp_dm_bonus_respawn | When attempting to get the bonus weapon in deathmatch, whether we should respawn you with it or just give it to you directly | gamedll clientdll replicated release missing3 |
| mp_dm_dogtag_score | Points to award for picking up a dogtag in deathmatch. | gamedll clientdll replicated release missing3 |
| mp_dm_teammode | In deathmatch, enables team DM visuals & scoring (0: personal, 1: team mode, 2: use team contribution score) | gamedll clientdll replicated release missing3 |
| mp_dm_teammode_kill_score | Team deathmatch victory points to award for enemy kill | gamedll clientdll replicated release missing3 |
| mp_dm_teammode_bonus_score | Team deathmatch victory points to award for kill with bonus weapon | gamedll clientdll replicated release missing3 |
| mp_dm_teammode_dogtag_score | Team deathmatch victory points to award for collecting enemy dogtags | gamedll clientdll replicated release missing3 |
| mp_dm_bonusweapon_dogtags | Additional dogtags to drop when making a kill with the bonus weapon | gamedll clientdll replicated release missing3 |
| mp_display_kill_assists | Whether to display and score player assists | gamedll clientdll replicated release missing3 |
| mp_match_end_restart | At the end of the match, perform a restart instead of loading a new map | gamedll clientdll replicated release |
| mp_match_end_changelevel | At the end of the match, perform a changelevel even if next map is the same | gamedll clientdll replicated release missing3 |
| mp_defuser_allocation | How to allocate defusers to CTs at start or round: 0=none, 1=random, 2=everyone | gamedll clientdll replicated release missing3 |
| mp_give_player_c4 | Whether this map should spawn a c4 bomb for a player or not. | gamedll clientdll replicated release missing3 |
| mp_require_gun_use_to_acquire | Whether guns must be +used to acquire or default is touch-to-pickup | gamedll release |
| mp_death_drop_gun | Which gun to drop on player death: 0=none, 1=best, 2=current or best | gamedll clientdll replicated release missing3 |
| mp_death_drop_c4 | Whether c4 is droppable | gamedll clientdll replicated release missing3 |
| mp_death_drop_grenade | Which grenade to drop on player death: 0=none, 1=best, 2=current or best, 3=all grenades | gamedll clientdll replicated release missing3 |
| ammo_item_limit_adrenaline |  | gamedll clientdll replicated release |
| ammo_grenade_limit_breachcharge |  | gamedll clientdll replicated release |
| ammo_item_limit_healthshot |  | gamedll clientdll replicated release missing3 |
| ammo_50AE_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_762mm_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_556mm_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_556mm_box_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_338mag_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_9mm_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_buckshot_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_45acp_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_357sig_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_57mm_impulse | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_50AE_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_762mm_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_556mm_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_556mm_box_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_338mag_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_9mm_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_buckshot_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_45acp_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_357sig_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| ammo_57mm_headshot_mult | You must enable tweaking via tweak_ammo_impulses to use this value. | developmentonly gamedll clientdll replicated |
| frag_grenade_blip_frequency |  | developmentonly gamedll clientdll replicated |
| spec_replay_round_delay | Round can be delayed by this much due to someone watching a replay; must be at least 3-4 seconds, otherwise the last replay will always be interrupted by round start, assuming normal pause between round_end and round_start events (7 seconds) and freezecam delay (2 seconds) and 7.4 second full replay (5.4 second pre-death and ~2 seconds post-death) and replay in/out switching (up to a second) | gamedll release |
| mp_footsteps_serverside | Makes the server always play footstep sounds. Clients never calculate footstep sounds locally, instead relying on the server. | gamedll release |
| sv_warmup_to_freezetime_delay | Delay between end of warmup and start of match. | gamedll clientdll replicated release missing3 |
| sv_server_graphic1 | A 360x60 (&lt;16kb) image file in /csgo/ that will be displayed to spectators. | gamedll clientdll replicated release |
| sv_server_graphic2 | A 220x45 (&lt;16kb) image file in /csgo/ that will be displayed to spectators. | gamedll clientdll replicated release |
| sv_disable_observer_interpolation | Disallow interpolating between observer targets on this server. | gamedll clientdll replicated release |
| sv_invites_only_mainmenu | If turned on, will ignore all invites when user is playing a match | gamedll clientdll replicated release |
| sv_holiday_mode | 0 = OFF, 1 = Halloween, 2 = Winter | gamedll clientdll replicated release |
| sv_teamid_overhead_always_prohibit | Determines whether cl_teamid_overhead_always is prohibited. | gamedll clientdll notify replicated release |
| sv_versus_screen_scene_id | Determines which scene is used for the versus screen. | gamedll release missing3 |
| sv_autoexec_mapname_cfg | Execute a mapname cfg file on the server automatically in custom game modes that require it. | gamedll release |
| sv_show_team_equipment_prohibit | Determines whether +cl_show_team_equipment is prohibited. | gamedll clientdll notify replicated release |
| sv_show_team_equipment_force_on | Force on if not prohibited | gamedll clientdll replicated release missing3 |
| sv_teamid_overhead_maxdist_spec | If &gt;0, server will override cl_teamid_overhead_maxdist_spec | gamedll clientdll replicated release missing3 |
| sv_teamid_overhead_maxdist | If &gt;0, server will override cl_teamid_overhead_maxdist | gamedll clientdll replicated release missing3 |
| sv_teamid_overhead | Shows teamID over player's heads.  0 = off, 1 = on | gamedll clientdll notify replicated release |
| sv_disable_radar | 0: regular radar; 1: always disabled; 2: disabled in warmup | gamedll clientdll replicated release missing3 |
| sv_hide_roundtime_until_seconds |  | gamedll clientdll replicated release |
| sv_outofammo_indicator |  | gamedll clientdll replicated release missing3 |
| sv_falldamage_to_below_player_ratio | Landing on a another player's head gives them this ratio of the damage. | gamedll clientdll replicated release missing3 |
| sv_falldamage_to_below_player_multiplier | Scale damage when distributed across two players | gamedll clientdll replicated release missing3 |
| sv_chat_proximity |  | gamedll clientdll replicated release |
| sv_voice_proximity |  | gamedll clientdll replicated release |
| sv_highlight_duration |  | gamedll clientdll replicated release |
| sv_highlight_distance |  | gamedll clientdll replicated release |
| sv_fade_player_visibility_farz |  | gamedll clientdll replicated release |
| sv_kick_players_with_cooldown | (0: do not kick on insecure servers; 1: kick players with Untrusted status or convicted by Overwatch; 2: kick players with any cooldown) | gamedll replicated release |
| sv_matchend_drops_enabled | Rewards gameplay time is always accumulated for players, but drops at the end of the match can be prevented | gamedll release |
| sv_buy_status_override | Override for buy status map info. 0 = everyone can buy, 1 = ct only, 2 = t only 3 = nobody | gamedll replicated release missing3 |
| sv_auto_adjust_bot_difficulty | Adjust the difficulty of bots each round based on contribution score. | gamedll release missing3 |
| sv_bots_get_easier_each_win | If &gt; 0, some # of bots will lower thier difficulty each time they win. The argument defines how many will lower their difficulty each time. | gamedll release missing3 |
| sv_bots_get_harder_after_each_wave | If &gt; 0, some # of bots will raise thier difficulty each time CTs beat a Guardian wave. The argument defines how many will raise their difficulty each time | gamedll release missing3 |
| sv_guardian_reset_c4_every_wave |  | gamedll release missing3 |
| tv_delaymapchange | Delays map change until broadcast is complete | gamedll release |
| sv_game_mode_flags | Dedicated server game mode flags to run | gamedll release |
| nextmap_print_enabled | When enabled prints next map to clients | gamedll release |
| sv_ggprogressive_autosniper_first | Should auto snipers go first or regular snipers? | gamedll release |
| sv_ggprogressive_shotgun_last | Should auto snipers go first or regular snipers? | gamedll release |
| sv_skirmish_id | Dedicated server skirmish id to run | gamedll clientdll replicated release |
| ff_damage_decoy_explosion | Enables or disables team damage from decoy detonation | gamedll clientdll replicated release |
| mp_autoteambalance |  | gamedll notify release missing3 |
| mp_maxrounds | max number of rounds to play before server changes maps | gamedll clientdll notify replicated release missing3 |
| mp_winlimit | Max score one team can reach before server changes maps | developmentonly gamedll clientdll notify replicated |
| mp_tournament |  | developmentonly gamedll clientdll notify replicated |
| mp_team_timeout_time | Duration of each timeout. | gamedll clientdll replicated release |
| mp_team_timeout_max | Number of timeouts each team gets per match. | gamedll clientdll replicated release |
| mp_technical_timeout_per_team | How many technical timeouts are there per team? | gamedll clientdll replicated release missing3 |
| mp_technical_timeout_duration_s | How many seconds is a full technical timeout? | gamedll clientdll replicated release missing3 |
| mp_weapons_max_gun_purchases_per_weapon_per_match | Max number of times a player may purchase any weapon per match | gamedll clientdll replicated release missing3 |
| sv_max_allowed_net_graph | Determines max allowed net_graph value for clients. | gamedll clientdll notify replicated release |
| mp_match_restart_delay | Time (in seconds) until a match restarts. | gamedll clientdll replicated release |
| mp_chattime | amount of time players can chat after the game is over | developmentonly gamedll clientdll replicated |
| mp_timelimit | game time per map in minutes | gamedll clientdll notify replicated release missing3 |
| mp_fraglimit |  | gamedll notify release |
| nextmode | Sets the game mode to be played when the next level loads | gamedll notify replicated release |
| nextlevel | If set to a valid map name, will trigger a changelevel to the specified map at the end of the round | gamedll notify release |
| mapcyclefile | Name of the .txt file used to cycle the maps on multiplayer servers  | developmentonly gamedll |
| game_online | The current game is online. | developmentonly gamedll hidden clientdll replicated |
| game_public | The current game is public. | developmentonly gamedll hidden clientdll replicated |
| mp_teamname_1 | A non-empty string overrides the first team's name. | gamedll release |
| mp_teamname_2 | A non-empty string overrides the second team's name. | gamedll release |
| mp_teamflag_1 | Enter a country's alpha 2 code to show that flag next to team 1's name in the spectator scoreboard. | gamedll release |
| mp_teamflag_2 | Enter a country's alpha 2 code to show that flag next to team 2's name in the spectator scoreboard. | gamedll release |
| mp_teamlogo_1 | Enter a team's shorthand image name to display their logo. Images can be found here: 'resource/flash/econ/tournaments/teams' | gamedll release |
| mp_teamlogo_2 | Enter a team's shorthand image name to display their logo. Images can be found here: 'resource/flash/econ/tournaments/teams' | gamedll release |
| mp_teamprediction_txt | A value between 1 and 99 will set predictions in favor of first team. | gamedll release |
| mp_teamprediction_pct | A value between 1 and 99 will show predictions in favor of CT team. | gamedll release |
| mp_teammatchstat_txt | A non-empty string sets the match stat description, e.g. 'Match 2 of 3'. | gamedll release |
| mp_teammatchstat_1 | A non-empty string sets first team's match stat. | gamedll release |
| mp_teammatchstat_2 | A non-empty string sets second team's match stat. | gamedll release |
| mp_teamscore_1 | A non-empty string for best-of-N maps won by the first team. | gamedll release |
| mp_teamscore_2 | A non-empty string for best-of-N maps won by the second team. | gamedll release |
| mp_teamscore_max | How many maps to win the series (bo3 max=2; bo5 max=3; bo7 max=4) | gamedll release |
| mp_teammatchstat_holdtime | Decide on a match stat and hold it additionally for at least so many seconds | gamedll release |
| mp_teammatchstat_cycletime | Cycle match stats after so many seconds | gamedll release |
| mp_heavyassaultsuit_speed | The max speed of a player when they are wearing the heavy assault suit | gamedll clientdll replicated release missing3 |
| inferno_damage_timer | How long between times for the inferno to deal damage. | developmentonly gamedll clientdll replicated |
| mp_hostagepenalty | Terrorist are kicked for killing too much hostages | developmentonly gamedll notify missing3 |
| hostage_debug | Show hostage AI debug information | gamedll cheat |
| hostage_drop_time | Time for the hostage before it fully drops to ground | developmentonly gamedll |
| hostage_is_silent | When set, the hostage won't play any code driven response rules lines | gamedll cheat |
| sv_pushaway_hostage_force | How hard the hostage is pushed away from physics objects (falls off with inverse square of distance). | gamedll replicated cheat |
| sv_pushaway_max_hostage_force | Maximum of how hard the hostage is pushed away from physics objects. | gamedll replicated cheat |
| mp_hostages_max | Maximum number of hostages to spawn. | gamedll replicated release missing3 |
| mp_hostages_spawn_farthest | When enabled will consistently force the farthest hostages to spawn. | gamedll replicated release |
| mp_hostages_spawn_same_every_round | 0 = spawn hostages randomly every round, 1 = same spawns for entire match. | gamedll replicated release missing3 |
| mp_hostages_spawn_force_positions | Comma separated list of zero based indices to force spawn positions, e.g. '0,2' or '1,6' | gamedll replicated release missing3 |
| mp_hostages_spawn_force_positions_xyz | Comma separated list of xyz locations to force spawn positions, e.g. 'x1 y1 z1,x2 y2 z2' | gamedll replicated release |
| mp_hostages_run_speed_modifier | Default is 1.0, slow down hostages by setting this to &lt; 1.0. | gamedll replicated release |
| mp_only_cts_rescue_hostages |  | gamedll replicated release missing3 |
| nav_approach_points_area_size_threshold | Ignore nav areas with at least one side smaller than this amount during approach point calculation. | developmentonly gamedll |
| nav_draw_hidingspots |  | gamedll cheat |
| nav_draw_dangerareas |  | gamedll cheat |
| mp_guardian_target_site | If set to the index of a bombsite, will cause random spawns to be only created near that site. | gamedll release missing3 |
| sv_flashbang_strength | Flashbang strength | developmentonly gamedll replicated |
| sv_hegrenade_damage_multiplier |  | gamedll replicated release missing3 |
| sv_hegrenade_radius_multiplier |  | gamedll replicated release missing3 |
| dota_overhead_on_received_item | Emit an overhead particle effect on receiving an item from an ally. | developmentonly gamedll clientdll replicated |
| ai_shot_bias_min |  | developmentonly gamedll clientdll replicated |
| ai_shot_bias_max |  | developmentonly gamedll clientdll replicated |
| ai_debug_shoot_positions |  | gamedll clientdll replicated cheat |
| ai_disabled |  | gamedll clientdll replicated cheat |
| sv_script_think_interval |  | developmentonly gamedll clientdll replicated |
| vprof_scope_entity_thinks |  | developmentonly gamedll clientdll replicated |
| vprof_think_limit |  | developmentonly gamedll |
| ent_pivot_size |  | gamedll archive cheat |
| debug_overlay_fullposition |  | developmentonly gamedll |
| ent_text_no_name_really_i_mean_it |  | gamedll cheat |
| ent_show_contexts | Show entity contexts in ent_text display | gamedll cheat |
| ent_actornames_font | ent_actornames font name | gamedll clientdll replicated cheat |
| ent_actornames_fontsize | ent_actornames font size | gamedll clientdll replicated cheat |
| ent_text_flags_active |  | gamedll archive cheat |
| sv_pushaway_clientside_size | Minimum size of pushback objects | developmentonly gamedll clientdll replicated |
| props_break_max_pieces_perframe | Maximum prop breakable piece count per frame (-1 = model default) | developmentonly gamedll clientdll replicated |
| break_damage_inherit_scale |  | developmentonly gamedll clientdll replicated |
| break_invulnerable_spawn_duration |  | developmentonly gamedll clientdll replicated |
| animgraph_enable_parallel_update |  | developmentonly gamedll clientdll replicated |
| animgraph_enable_tickJobs |  | developmentonly gamedll clientdll replicated |
| animgraph_force_tick_all_graphs |  | developmentonly gamedll clientdll replicated |
| sv_skip_update_animations | Enable to skip game animations | developmentonly gamedll |
| animgraph_slope_draw_raycasts |  | gamedll clientdll replicated cheat |
| animgraph_draw_traces |  | developmentonly gamedll clientdll replicated |
| animgraph_trace_ignore_prop_physics |  | developmentonly gamedll clientdll replicated |
| sv_massreport |  | developmentonly gamedll |
| ent_skeleton_duration | Duration of ent_skeleton display | gamedll clientdll replicated cheat |
| skill | Game skill level. | gamedll clientdll archive replicated per_user |
| sv_lightquery_debug |  | gamedll cheat |
| lightquery_debug_direct_lighting |  | gamedll clientdll replicated cheat |
| lightquery_debug_indirect_lighting |  | gamedll clientdll replicated cheat |
| lightquery_debug_indirect_lighting_fast | 0 = standard sampling, 1 = fast sampling, 2 = ultra-fast sampling | gamedll clientdll replicated cheat |
| phys_active | Whether PLAYER physics is actively simulated (ie. noclip) | developmentonly gamedll |
| sv_phys_enabled | Enable all physics simulation | gamedll cheat |
| sv_phys_stop_at_collision |  | gamedll cheat |
| sv_phys_sleep_enable | Enable sleeping for dynamic physics bodies. | gamedll cheat |
| sv_phys_animated_hierarchy |  | developmentonly gamedll |
| phys_show_stats |  | developmentonly gamedll clientdll replicated |
| phys_threaded_transform_update |  | developmentonly gamedll clientdll replicated |
| sv_gravity | World gravity. | gamedll clientdll notify replicated release |
| phys_timescale | Scale time for physics | developmentonly gamedll |
| phys_continuous_kinematic_update |  | developmentonly gamedll clientdll replicated |
| phys_parallel_islands | Enable/Disable Parallel Island Solving | developmentonly gamedll clientdll replicated |
| sv_phys_visualize_awake |  | developmentonly gamedll |
| phys_visualize_awake_dynamic_only |  | developmentonly gamedll clientdll replicated |
| phys_visualize_awake_unattached_only |  | developmentonly gamedll clientdll replicated |
| sv_phys_debug_callback_entities | Print all entities that get touch callbacks. Each entity is printed only once. | gamedll cheat |
| phys_log_updaters_include |  | developmentonly gamedll clientdll replicated |
| phys_log_updaters_exclude |  | developmentonly gamedll clientdll replicated |
| phys_log_updaters |  | developmentonly gamedll clientdll replicated |
| sv_hitbox_debug |  | developmentonly gamedll |
| sos_debug_emit |  | developmentonly gamedll clientdll replicated |
| snd_break_on_start_soundevent | Use to debug break on any soundevent that is started matching this name | gamedll clientdll replicated cheat |
| script_break_in_native_debugger_on_error |  | developmentonly gamedll |
| script_attach_debugger_at_startup |  | developmentonly gamedll |
| ai_debug_dyninteractions | Debug the NPC dynamic interaction system. | gamedll cheat |
| fog_volume_debug | If enabled, prints diagnostic information about the current fog volume | developmentonly gamedll |
| ammo_50AE_max |  | gamedll clientdll replicated release |
| ammo_762mm_max |  | gamedll clientdll replicated release |
| ammo_556mm_max |  | gamedll clientdll replicated release |
| ammo_556mm_small_max |  | gamedll clientdll replicated release |
| ammo_556mm_box_max |  | gamedll clientdll replicated release |
| ammo_338mag_max |  | gamedll clientdll replicated release |
| ammo_9mm_max |  | gamedll clientdll replicated release |
| ammo_buckshot_max |  | gamedll clientdll replicated release |
| ammo_45acp_max |  | gamedll clientdll replicated release |
| ammo_357sig_max |  | gamedll clientdll replicated release |
| ammo_357sig_p250_max |  | gamedll clientdll replicated release |
| ammo_357sig_small_max |  | gamedll clientdll replicated release |
| ammo_357sig_min_max |  | gamedll clientdll replicated release |
| ammo_57mm_max |  | gamedll clientdll replicated release |
| ammo_grenade_limit_default |  | gamedll clientdll replicated release missing3 |
| ammo_grenade_limit_flashbang |  | gamedll clientdll replicated release missing3 |
| ammo_grenade_limit_total |  | gamedll clientdll replicated release missing3 |
| ammo_grenade_limit_tripwirefire |  | gamedll clientdll replicated release |
| sv_vote_issue_pause_match_spec_only | When enabled, only admins start technical pause | gamedll notify replicated release |
| sv_vote_issue_timeout_allowed | Can people hold votes to time out? | developmentonly gamedll |
| sv_vote_issue_matchready_allowed | Can people hold votes to ready/unready the match? | developmentonly gamedll |
| sv_vote_issue_swap_teams_allowed | Can people hold votes to swap the teams? | developmentonly gamedll |
| sv_vote_issue_surrrender_allowed | Can people hold votes to surrender? | developmentonly gamedll |
| weapon_accuracy_logging |  | developmentonly gamedll clientdll archive replicated |
| weapon_near_empty_sound |  | gamedll clientdll replicated cheat |
| weapon_debug_max_inaccuracy | Force all shots to have maximum inaccuracy | developmentonly gamedll clientdll replicated cheat |
| weapon_debug_inaccuracy_only_up | Force weapon inaccuracy to be in exactly the up direction | developmentonly gamedll clientdll replicated cheat |
| snd_max_pitch_shift_inaccuracy |  | developmentonly gamedll clientdll replicated |
| weapon_accuracy_shotgun_spread_patterns |  | gamedll clientdll replicated release |
| use_fx_queue | use_fx_queue | developmentonly gamedll clientdll replicated |
| debug_aim_angle |  | developmentonly gamedll clientdll replicated |
| nav_max_view_distance | Maximum range for precomputed nav mesh visibility (0 = default 1500 units) | gamedll cheat |
| nav_potentially_visible_dot_tolerance |  | gamedll cheat |
| bot_force_duck |  | developmentonly gamedll |
| mp_coopmission_bot_difficulty_offset | The difficulty offset modifier for bots during coop missions. | gamedll replicated release missing3 |
| bot_traceview | For internal testing purposes. | gamedll replicated cheat |
| bot_stop | bot_stop &lt;1\|all&gt; \| &lt;not_bomber&gt; \| &lt;t&gt; \| &lt;ct&gt; | gamedll replicated cheat |
| bot_ignore_enemies | If nonzero, bots will ignore enemies (for debugging). | gamedll replicated cheat |
| bot_show_nav | For internal testing purposes. | gamedll replicated cheat |
| bot_walk | If nonzero, bots can only walk, not run. | developmentonly gamedll replicated |
| bot_difficulty | Defines the skill of bots joining the game.  Values are: 0=easy, 1=normal, 2=hard, 3=expert. | gamedll replicated release missing3 |
| bot_debug | For internal testing purposes. | gamedll replicated cheat |
| bot_debug_target | For internal testing purposes. | gamedll replicated cheat |
| bot_quota | Determines the total number of bots in the game. | gamedll replicated release missing3 |
| bot_quota_mode | Determines the type of quota..Allowed values: 'normal', 'fill', and 'match'..If 'fill', the server will adjust bots to keep N players in the game, where N is bot_quota..If 'match', the server will maintain a 1:N ratio of humans to bots, where N is bot_quota. | gamedll replicated release missing3 |
| bot_prefix | This string is prefixed to the name of all bots that join the game..&lt;difficulty&gt; will be replaced with the bot's difficulty..&lt;weaponclass&gt; will be replaced with the bot's desired weapon class..&lt;skill&gt; will be replaced with a 0-100 representation of the bot's skill. | developmentonly gamedll replicated |
| bot_allow_rogues | If nonzero, bots may occasionally go 'rogue'. Rogue bots do not obey radio commands, nor pursue scenario goals. | gamedll replicated release missing3 |
| bot_allow_pistols | If nonzero, bots may use pistols. | gamedll replicated release |
| bot_allow_shotguns | If nonzero, bots may use shotguns. | gamedll replicated release |
| bot_allow_sub_machine_guns | If nonzero, bots may use sub-machine guns. | gamedll replicated release |
| bot_allow_rifles | If nonzero, bots may use rifles. | gamedll replicated release |
| bot_allow_machine_guns | If nonzero, bots may use the machine gun. | gamedll replicated release |
| bot_allow_grenades | If nonzero, bots may use grenades. | gamedll replicated release |
| bot_allow_snipers | If nonzero, bots may use sniper rifles. | gamedll replicated release |
| bot_join_team | Determines the team bots will join into. Allowed values: 'any', 'T', or 'CT'. | gamedll replicated release |
| bot_join_after_player | If nonzero, bots wait until a player joins before entering the game. | gamedll replicated release |
| bot_auto_vacate | If nonzero, bots will automatically leave to make room for human players. | developmentonly gamedll replicated |
| bot_zombie | If nonzero, bots will stay in idle mode and not attack. | gamedll replicated cheat |
| bot_defer_to_human_goals | If nonzero and there is a human on the team, the bots will not do the scenario tasks. | gamedll replicated release missing3 |
| bot_defer_to_human_items | If nonzero and there is a human on the team, the bots will not get scenario items. | gamedll replicated release missing3 |
| bot_chatter | Control how bots talk. Allowed values: 'off', 'radio', 'minimal', or 'normal'. | gamedll replicated release missing3 |
| bot_dont_shoot | If nonzero, bots will not fire weapons (for debugging). | gamedll replicated cheat release |
| bot_eco_limit | If nonzero, bots will not buy if their money falls below this amount. | developmentonly gamedll replicated |
| bot_auto_follow | If nonzero, bots with high co-op may automatically follow a nearby human player. | developmentonly gamedll replicated |
| bot_flipout | If nonzero, bots use no CPU for AI. Instead, they run around randomly. | developmentonly gamedll replicated |
| bot_controllable | Determines whether bots can be controlled by players | developmentonly gamedll replicated |
| mp_bot_ai_bt | Use the specified behavior tree file to drive the bot behavior. | gamedll release missing3 |
| bot_show_occupy_time | Show when each nav area can first be reached by each team. | gamedll cheat |
| bot_show_battlefront | Show areas where rushing players will initially meet. | gamedll cheat |
| bot_join_delay | Prevents bots from joining the server for this many seconds after a map change. | developmentonly gamedll |
| bot_join_in_warmup | Prevents bots from joining the server while warmup phase is active. | developmentonly gamedll |
| throttle_expensive_ai |  | developmentonly gamedll |
| csgo_nav_jump_link_detour_threshold | don't traverse a jump link if there's a detour that costs less than this amount | developmentonly gamedll replicated |
| mp_guardian_force_collect_hostages_timeout | Force bots to collect hostages after this amount of time if no enemy has been seen. | gamedll release missing3 |
| bot_max_vision_distance_override | Max distance bots can see targets. | gamedll replicated release missing3 |
| bot_ignore_players | Bots will not see non-bot players. | gamedll cheat |
| bot_coop_idle_max_vision_distance | Max distance bots can see targets (in coop) when they are idle, dormant, hiding or asleep. | gamedll replicated release missing3 |
| cv_bot_ai_bt_debug_target | Draw the behavior tree of the given bot. | gamedll replicated cheat |
| cv_bot_ai_bt_moveto_show_next_hiding_spot | Draw the hiding spot the bot will check next. | gamedll replicated cheat |
| cv_bot_ai_bt_hiding_spot_show | Draw hiding spots. | gamedll replicated cheat |
| sv_bot_parallel_threat_detection | Perform bot threat detection in parallel | developmentonly gamedll |
| bot_max_visible_smoke_length | Bots will see players through smoke clouds up to this length. | gamedll replicated release |
| csgo_fatdemo_enable |  | gamedll clientdll replicated release |
| csgo_fatdemo_output |  | gamedll clientdll replicated release |
| bot_loadout | bots are given these items at round start | gamedll cheat |
| bot_randombuy | should bots ignore their prefered weapons and just buy weapons at random? | gamedll cheat |
| sv_bot_buy_grenade_chance | Chance bots will buy a grenade with leftover money (after prim, sec and armor). Input as percent (0-100.0) | gamedll release missing3 |
| sv_bot_buy_smoke_weight | Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv_bot_buy_*_weight convars. | gamedll release |
| sv_bot_buy_flash_weight | Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv_bot_buy_*_weight convars. | gamedll release |
| sv_bot_buy_decoy_weight | Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv_bot_buy_*_weight convars. | gamedll release |
| sv_bot_buy_molotov_weight | Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv_bot_buy_*_weight convars. | gamedll release |
| sv_bot_buy_hegrenade_weight | Given a bot will buy a grenade, controls the odds of the grenade type. Proportional to all other sv_bot_buy_*_weight convars. | gamedll release |
| bot_coop_force_throw_grenade_chance |  | gamedll cheat |
| devonly_chicken_feeler_distance | Chicken feeler distance | developmentonly gamedll |
| devonly_chicken_feeler_height | Chicken feeler height | developmentonly gamedll |
| devonly_chicken_blocktimer | Chicken blockertimer | developmentonly gamedll |
| debug_chicken | Chicken debug info | developmentonly gamedll |
| inferno_per_flame_spawn_duration | Duration each new flame will attempt to spawn new flames | gamedll cheat |
| inferno_initial_spawn_interval | Time between spawning flames for first fire | gamedll cheat |
| inferno_child_spawn_interval_multiplier | Amount spawn interval increases for each child | gamedll cheat |
| inferno_max_child_spawn_interval | Largest time interval for child flame spawning | gamedll cheat |
| inferno_spawn_angle | Angular change from parent | gamedll cheat |
| inferno_max_flames | Maximum number of flames that can be created | gamedll replicated release |
| inferno_flame_spacing | Minimum distance between separate flame spawns | gamedll cheat |
| inferno_flame_lifetime | Average lifetime of each flame in seconds | gamedll replicated release |
| inferno_friendly_fire_duration | For this long, FF is credited back to the thrower. | gamedll cheat |
| inferno_debug |  | gamedll cheat |
| inferno_damage | Damage per second | gamedll cheat |
| inferno_max_range | Maximum distance flames can spread from their initial ignition point | gamedll replicated release |
| inferno_velocity_factor |  | gamedll cheat |
| inferno_velocity_decay_factor |  | gamedll cheat |
| inferno_velocity_normal_factor |  | gamedll cheat |
| inferno_surface_offset |  | gamedll cheat |
| inferno_child_spawn_max_depth |  | gamedll replicated release |
| inferno_scorch_decals |  | gamedll cheat |
| inferno_max_trace_per_tick |  | developmentonly gamedll |
| inferno_forward_reduction_factor |  | gamedll cheat |
| inferno_smoke_volume_density |  | gamedll cheat |
| hint_panel_fadein |  | gamedll clientdll replicated cheat |
| hint_panel_fadeout |  | gamedll clientdll replicated cheat |
| hint_controller_use_hand_origin |  | developmentonly gamedll clientdll replicated |
| r_light_flickering_enabled |  | developmentonly gamedll clientdll replicated |
| r_mixed_shadows_fade_out_time |  | developmentonly gamedll clientdll replicated |
| r_mixed_shadows_fade_in_time |  | developmentonly gamedll clientdll replicated |
| sv_log_change_offsets | Log change offsets to game/varchangeinfoN.log files. | developmentonly gamedll |
| sv_watchtransmit | Watch NetworkStateChanged info for this entity index. | gamedll release |
| sv_max_change_offsets | How many network changes to track before requiring full diff check. | developmentonly gamedll |
| sv_pvs_entity | If set, only allows this ent index to network (other than players and things that force sending). | developmentonly gamedll |
| sv_pvs_random | If set, objects blink in/out of pvs randomly. | developmentonly gamedll |
| pvs_flowtype | Flow through spawn groups for vis (0 == default, 1 == always visible, 2 == never visible. | gamedll release |
| pvs_debugentity | Verbose spew for this entity when doing IsInPVS computation. | gamedll release |
| sv_workshop_allow_other_maps | When hosting a workshop collection, users can play other workshop map on this server when it is empty and then mapcycle into this server collection. | gamedll release |
| tv_allow_camera_man_steamid | Allows tournament production cameraman to run csgo.exe -interactivecaster on SteamID 7650123456XXX and be the camera man. | gamedll release |
| tv_allow_camera_man_steamid2 | Allows tournament production tv cameraman to run csgo.exe -interactivecaster on SteamID 7650123456XXX and be the tv camera man. | gamedll release |
| game_type | The current game type. See GameModes.txt. | gamedll clientdll replicated release |
| game_mode | The current game mode (based on game type). See GameModes.txt. | gamedll clientdll replicated release |
| custom_bot_difficulty | Bot difficulty for offline play. | gamedll clientdll replicated release |
| sv_prime_accounts_only | When this setting is enabled only prime users can connect to this game server. | gamedll release |
| radarvismethod | 0 for traditional method, 1 for more realistic method | gamedll cheat |
| radarvispow | the degree to which you can point away from a target, and still see them on radar. | gamedll cheat |
| radarvisdistance | at this distance and beyond you need to be point right at someone to see them | gamedll cheat |
| radarvismaxdot | how closely you have to point at someone to see them beyond max distance | gamedll cheat |
| mp_logdetail | Logs attacks.  Values are: 0=off, 1=enemy, 2=teammate, 3=both) | gamedll release |
| mp_logdetail_items | Logs a line any time a player acquires or loses an item. | gamedll release |
| sv_nonemesis | Disable nemesis and revenge. | developmentonly gamedll |
| sv_debugroundstats |  | developmentonly gamedll |
| sv_record_item_time_data | Turn on recording of per player item time data into the server log. | gamedll release |
| sv_autobuyammo | Enable automatic ammo purchase when inside buy zones during buy periods | gamedll notify replicated release missing3 |
| healthshot_healthboost_damage_multiplier |  | gamedll replicated release missing3 |
| CS_WarnFriendlyDamageInterval | Defines how frequently the server notifies clients that a player damaged a friend | gamedll cheat |
| mp_tagging_scale | Scalar for player tagging modifier when hit. Lower values for greater tagging. | gamedll replicated release missing3 |
| mp_flinch_punch_scale | Scalar for first person view punch when getting hit. | developmentonly gamedll replicated cheat |
| phys_playerscale | This multiplies the bullet impact impuse on players for more dramatic results when players are shot. | developmentonly gamedll replicated |
| phys_headshotscale | Modifier for the headshot impulse hits on players | developmentonly gamedll replicated |
| sv_dz_parachute_reuse |  | gamedll replicated release |
| sv_player_parachute_velocity |  | gamedll replicated release |
| gg_knife_kill_demotes | 0 = knife kill in gungame has no effect on player level, 1 = knife kill demotes player by one level | developmentonly gamedll replicated |
| mp_logdistance_2d | Enables distance logging every so many units | gamedll release |
| mp_logdistance_sec | Enables distance logging every so many seconds | gamedll release |
| mp_logloadouts | Enables distance logging with full loadouts | gamedll release |
| dev_add_onground_on_spawn | Should we mess with the ground flag when we spawn? (I don't think we should). If we don't hit the assert in CCSPlayer_MovementServices::ProcessMovement, we should remove this by Dec 2022. | gamedll release |
| sv_guardian_min_wave_for_heavy |  | gamedll release missing3 |
| sv_guardian_max_wave_for_heavy |  | gamedll release missing3 |
| sv_guardian_heavy_count |  | gamedll release missing3 |
| sv_guardian_heavy_all |  | gamedll release missing3 |
| cs_logtouchexpansion | cs_logtouchexpansion &lt;ent index or -1 for all&gt;. Log player touch expansion component. | gamedll cheat |
| sv_spawn_rappel_min_duration |  | gamedll replicated release |
| sv_spawn_rappel_min_duration_with_chute |  | gamedll replicated release |
| cs_ShowStateTransitions | cs_ShowStateTransitions &lt;ent index or -1 for all&gt;. Show player state transitions. | gamedll cheat |
| sv_guardian_starting_equipment_humans | Extra starting equipment for human players in guardian modes | gamedll release missing3 |
| sv_guardian_health_refresh_per_wave | Health given to survivors per wave in guardian mode. | gamedll release missing3 |
| sv_guardian_respawn_health | Starting health of guardian players when respawned. | gamedll release missing3 |
| sv_guardian_spawn_health_ct | Starting health in guardian modes. | gamedll release missing3 |
| sv_guardian_spawn_health_t | Starting health in guardian modes. | gamedll release missing3 |
| sv_nowinpanel | Turn on/off win panel on server | developmentonly gamedll |
| sv_show_voip_indicator_for_enemies | Makes it so the voip icon is shown over enemies as well as allies when they are talking | gamedll replicated release |
| bot_mimic | Bot uses usercmd of player by index. | gamedll clientdll replicated cheat |
| bot_freeze |  | gamedll cheat |
| bot_mimic_yaw_offset |  | gamedll cheat |
| cs_hostage_near_rescue_music_distance |  | gamedll cheat |
| cs_enable_player_physics_box |  | gamedll release |
| sv_dz_cash_bundle_size | Size of a cash bundle | gamedll replicated release |
| sv_dz_cash_mega_bundle_size | Size of a mega cash bundle | gamedll replicated release |
| sv_dz_contractkill_reward | Cash bundles to award for a successful contract kill | gamedll replicated release |
| mp_deathcam_skippable | Determines whether a player can early-out of the deathcam. | gamedll replicated release missing3 |
| sv_max_deathmatch_respawns_per_tick |  | developmentonly gamedll missing3 |
| sv_radio_throttle_window | The number of seconds before radio command tokens refresh. | gamedll release |
| tv_relayradio | Relay team radio commands to TV: 0=off, 1=on | gamedll release |
| bot_chatter_use_rr | 0 = Use old bot chatter system, 1 = Use response rules | developmentonly gamedll |
| sv_vote_timer_duration | How long to allow voting on an issue | gamedll release |
| sv_vote_command_delay | How long after a vote passes until the action happens | gamedll release |
| sv_allow_votes | Allow voting? | gamedll release missing3 |
| sv_vote_failure_timer | A vote that fails cannot be re-submitted for this long | gamedll release |
| sv_vote_creation_timer | How often someone can individually call a vote. | gamedll release |
| sv_vote_quorum_ratio | The minimum ratio of players needed to vote on an issue to resolve it. | gamedll release |
| sv_vote_allow_spectators | Allow spectators to initiate votes? | gamedll release |
| sv_vote_count_spectator_votes | Allow spectators to vote on issues? | gamedll release |
| sv_vote_allow_in_warmup | Allow voting during warmup? | gamedll release |
| sv_vote_disallow_kick_on_match_point | Disallow vote kicking on the match point round. | gamedll release |
| sv_mapvetopickvote_maps | Which maps are used for map veto pick sequence | gamedll release |
| sv_mapvetopickvote_phase_duration | How many seconds each phase lasts | gamedll release |
| sv_vote_issue_restart_game_allowed | Can people hold votes to restart the game? | gamedll release |
| sv_arms_race_vote_to_restart_disallowed_after | Arms Race gun level after which vote to restart is disallowed | gamedll replicated release missing3 |
| sv_vote_issue_kick_allowed | Can people hold votes to kick players from the server? | gamedll notify replicated release |
| sv_vote_kick_ban_duration | How long should a kick vote ban someone from the server? (in minutes) | gamedll notify replicated release |
| sv_vote_issue_loadbackup_allowed | Can people hold votes to load match from backup? | gamedll notify replicated release |
| sv_vote_issue_loadbackup_spec_only | When enabled, only admins load match from backup | gamedll notify replicated release |
| sv_vote_issue_loadbackup_spec_safe | When enabled, admins load match from backup in safe time of the round only | gamedll release |
| sv_vote_issue_loadbackup_spec_authoritative | When enabled, admins load match from backup without players vote | gamedll release |
| sv_vote_issue_changelevel_allowed | Can people hold votes to change levels? | developmentonly gamedll |
| sv_vote_to_changelevel_before_match_point | Restricts vote to change level to rounds prior to match point (default 0, vote is never disallowed) | gamedll replicated release missing3 |
| sv_vote_issue_nextlevel_allowed | Can people hold votes to set the next level? | developmentonly gamedll |
| sv_vote_issue_nextlevel_choicesmode | Present players with a list of lowest playtime maps to choose from? | developmentonly gamedll |
| sv_vote_issue_nextlevel_allowextend | Allow players to extend the current map? | developmentonly gamedll |
| sv_vote_issue_nextlevel_prevent_change | Not allowed to vote for a nextlevel if one has already been set. | developmentonly gamedll |
| sv_vote_issue_scramble_teams_allowed | Can people hold votes to scramble the teams? | developmentonly gamedll |
| sv_vote_issue_pause_match_allowed | Can people hold votes to pause/unpause the match? | developmentonly gamedll |
| webapi_values_max_pool_size_mb | Maximum size in bytes of the WebAPIValues buffer pool | developmentonly clientdll |
| webapi_values_init_buffer_size | Initial buffer size for buffers in the WebAPIValues buffer pool | developmentonly clientdll |
| r_csgo_effects_bloom |  | clientdll cheat |
| r_csgo_effects_bloom_when_smoked |  | clientdll cheat |
| r_csgo_cubemap_normalization |  | clientdll cheat |
| r_csgo_postprocess_enable |  | clientdll cheat |
| r_csgo_enable_high_precision_lighting |  | clientdll cheat |
| r_csgo_render_alpha_immunity |  | developmentonly clientdll cheat |
| r_csgo_render_post_local_contrast |  | clientdll cheat |
| r_csgo_directional_lightmaps |  | clientdll cheat |
| r_csgo_multiscattering |  | developmentonly clientdll |
| r_csgo_microshadowing |  | developmentonly clientdll |
| r_csgo_viewmodel_envmap_position_bias |  | developmentonly clientdll cheat |
| r_csgo_tools_vis_cubemap_roughness |  | developmentonly clientdll cheat |
| r_csgo_stencil_sniper_zoom |  | developmentonly clientdll |
| r_csgo_firstpersonlegs_nearz_offset |  | developmentonly clientdll |
| r_csgo_water_effects |  | clientdll cheat |
| r_csgo_reflection_min_far_plane |  | clientdll cheat |
| r_csgo_water_refraction |  | clientdll cheat |
| r_player_fog_maxdensity_multiplier |  | developmentonly clientdll cheat |
| r_player_fog_distance_multiplier |  | developmentonly clientdll cheat |
| r_player_visibility_mode |  | clientdll archive release |
| r_player_visibility_strength |  | developmentonly clientdll cheat |
| r_player_visibility_stencil |  | developmentonly clientdll cheat |
| r_post_bloom_debug | 1 = bloom output (before thresholding), 2 = quarter res downsample, 3 = quarter res effects bloom 4 = quarter res effects raw | developmentonly clientdll |
| r_csgo_render_post_bloom_strength |  | clientdll cheat |
| r_csgo_bloom_threshold_all_samples | Execute bloom threshold once per sample during downsample (default enabled, higher quality, less bloom aliasing) | developmentonly clientdll |
| r_csgo_bloom_threshold_downsample_jimenez | Custom downsample based on Jimenez14, (default enabled, higher quality, decreases bloom aliasing further) | developmentonly clientdll |
| r_csgo_lowend_objects | 0 = Force disable, 1 = use video settings | developmentonly clientdll |
| r_refraction_clip_plane_adjust |  | clientdll cheat |
| r_particle_shadows |  | developmentonly clientdll |
| r_particle_shadows_cast_on_particles |  | developmentonly clientdll |
| r_particle_shadows_cast_on_particles_scale |  | developmentonly clientdll |
| r_particle_shadows_use_depth_pyramid |  | developmentonly clientdll |
| r_particle_shadows_cast_on_world |  | developmentonly clientdll |
| r_particle_shadow_map_texture_size |  | developmentonly clientdll |
| r_debug_particle_shadows |  | clientdll cheat |
| r_csgo_fsr_upsample | 0 == bilinear upsampe, 1 == FSR upsample, 2 == FSR + RCAS upsample | developmentonly clientdll |
| r_csgo_fsr_rcas_sharpness | RCAS sharpness when using FSR + RCAS upsample. | developmentonly clientdll |
| r_csgo_fsr_enable_mip_bias | Apply negative mip bias when rendering with FSR. | developmentonly clientdll |
| r_csgo_enable_sunlight_check | Enable vis tests for sunlight. | developmentonly clientdll |
| r_csgo_mixed_resolution_particles |  | developmentonly clientdll |
| r_csgo_mixed_resolution_color_slices |  | clientdll cheat |
| r_csgo_mixed_resolution_particles_scale |  | clientdll cheat |
| r_csgo_mixed_resolution_particles_minmax |  | clientdll cheat |
| r_csgo_mboit |  | clientdll cheat |
| r_csgo_mboit_debug |  | clientdll cheat |
| r_csgo_mboit_overestimation |  | clientdll cheat |
| r_csgo_mboit_bias |  | clientdll cheat |
| r_csgo_mboit_use_4_moments |  | clientdll cheat |
| r_csgo_mboit_force_mixed_resolution |  | developmentonly clientdll |
| r_csgo_joint_upscale_sigma |  | developmentonly clientdll |
| r_csgo_volume_mboit_optimization |  | clientdll cheat |
| r_csgo_cmaa_enable |  | developmentonly clientdll |
| r_csgo_cmaa_quality | 0=low, 1=medium, 2=high, 3=ultra | developmentonly clientdll |
| r_csgo_cmaa_extra_sharp | trade more sharpness for reduced antialiasing | developmentonly clientdll |
| r_csgo_cmaa_debug_edges | debug visualize edges | developmentonly clientdll |
| r_csgo_gpu_culling | CSGO/Graphics/GPU Culling | developmentonly clientdll menubar_item |
| r_csgo_gpu_culling_two_pass | CSGO/Graphics/GPU Culling (Two Pass) | developmentonly clientdll menubar_item |
| r_csgo_gpu_culling_shadows | CSGO/Graphics/GPU Cull Shadow Views | developmentonly clientdll menubar_item |
| r_csgo_decals_use_msaa |  | developmentonly clientdll |
| r_csgo_smoke_overlay_min_dt |  | developmentonly clientdll |
| r_csgo_smoke_quality | 0 - no CSM, 1 - use 3x3 or bilinear PCF (dep on shader detail), 2 - use 25 tap PCSS PCF | developmentonly clientdll |
| r_csgo_msaa_resolve_apply_exposure_scale | 0 - before, 1 - after fix for a2c fringing | developmentonly clientdll |
| r_csgo_single_lightbinner |  | developmentonly clientdll |
| r_csgo_resolve_dither_noise_amount | Amount of screen space dither noise to apply during resolve (used/essential with R11G11B10_FLOAT RT) | developmentonly clientdll |
| r_csgo_resolve_dither_bluenoise_amount | Equivalent to r_csgo_render_dither_scale, but purely to control bluenoise for R11G11B10 downsample dither (if r_csgo_r11g11b10_dither_mode = 2) | developmentonly clientdll |
| r_csgo_r11g11b10_dither_mode | 0 - disabled, 1 - regular dither noise, 2 - blue noise dither | developmentonly clientdll |
| r_csgo_cable_pixel_radius_clamp | Minimum clamped size in pixels of a cable (if using F_CLAMP_MIN_RADIUS 1 in cable material) | developmentonly clientdll |
| r_csgo_override_global_time |  | clientdll cheat |
| csgo_3d_skybox |  | developmentonly clientdll |
| csgo_use_fullsort_for_opaque | fullsort the opaque pass when there wasn't a depth prepass | clientdll cheat |
| r_csgo_prewarm_particles |  | developmentonly clientdll |
| r_show_build_info |  | developmentonly clientdll |
| r_csgo_debug_reflection_rects |  | clientdll cheat |
| r_csgo_depth_prepass_reflections_large |  | clientdll cheat |
| r_csgo_depth_prepass_reflections_small |  | clientdll cheat |
| ui_deepstats_radio_heat_figurine |  | clientdll archive release |
| ui_popup_weaponupdate_version |  | clientdll archive release |
| ui_show_subscription_alert |  | clientdll archive release |
| ui_mainmenu_bkgnd_movie_94408AE3 | Main menu background movie | clientdll archive release |
| lobby_default_privacy_bits2 | Lobby default permissions (0: private, 1: public) | clientdll archive release |
| cl_clanid | Current clan ID for name decoration | hidden clientdll archive userinfo |
| ui_setting_advertiseforhire_auto | Whether users will automatically advertise for invites (0: off; 1: last; 2: auto) | clientdll archive release |
| ui_setting_advertiseforhire_auto_last | Which game mode users last used to advertise for invites | clientdll archive release |
| key_bind_version |  | hidden clientdll archive release |
| cl_streams_request_url | Number of streams requested for display | developmentonly clientdll |
| cl_streams_request_accept | Header for api request | developmentonly clientdll |
| cl_streams_image_sfurl | Format of Scaleform image representing the stream | developmentonly clientdll |
| cl_streams_refresh_interval | How often to refresh streams list | developmentonly clientdll |
| cl_streams_write_response_file | When set will save streams info file for diagnostics | developmentonly clientdll |
| cl_streams_mytwitchtv_nolink | Twitch.tv account linking URL | developmentonly clientdll |
| cl_streams_mytwitchtv_channel | Twitch.tv account channel URL | developmentonly clientdll |
| cachedvalue_count_teammates |  | hidden clientdll archive |
| cl_righthand | Use right-handed view models. | clientdll archive |
| vm_draw_always |  | developmentonly clientdll |
| vm_camera |  | developmentonly clientdll |
| vm_camera_scale |  | developmentonly clientdll |
| vm_camera_no_roll |  | developmentonly clientdll |
| vm_camera_interp_speed |  | developmentonly clientdll |
| cl_crosshairstyle | 0 = DEFAULT (DISABLED), 1 = DEFAULT STATIC (DISABLED), 2 = DEFAULT (accurate recoil/spread feedback with a fixed inner part), 3 = ACCURATE DYNAMIC (DISABLED) (accurate recoil/spread feedback), 4 = DEFAULT STATIC, 5 = LEGACY (fake recoil - inaccurate feedback) | clientdll archive per_user |
| cl_crosshaircolor | Set crosshair color as defined in game_options.consoles.txt | clientdll archive per_user |
| cl_crosshairalpha |  | clientdll archive per_user |
| cl_crosshairusealpha |  | clientdll archive per_user |
| cl_crosshairgap |  | clientdll archive per_user |
| cl_crosshairgap_useweaponvalue | If set to 1, the gap will update dynamically based on which weapon is currently equipped | clientdll archive per_user |
| cl_crosshairsize |  | clientdll archive per_user |
| cl_crosshairthickness |  | clientdll archive per_user |
| cl_crosshairdot |  | clientdll archive per_user |
| cl_crosshair_recoil |  | clientdll archive per_user |
| cl_crosshaircolor_r |  | clientdll archive per_user |
| cl_crosshaircolor_g |  | clientdll archive per_user |
| cl_crosshaircolor_b |  | clientdll archive per_user |
| weapon_debug_spread_show | Enables display of weapon accuracy; 1: show accuracy box, 3: show accuracy with dynamic crosshair | clientdll cheat per_user |
| weapon_debug_spread_gap |  | clientdll cheat per_user |
| cl_crosshair_drawoutline | Draws a black outline around the crosshair for better visibility | clientdll archive per_user |
| cl_crosshair_outlinethickness | Set how thick you want your crosshair outline to draw (0-3) | clientdll archive per_user |
| cl_crosshair_dynamic_splitdist | If using cl_crosshairstyle 2, this is the distance that the crosshair pips will split into 2. (default is 7) | clientdll archive per_user |
| cl_crosshair_dynamic_splitalpha_innermod | If using cl_crosshairstyle 2, this is the alpha modification that will be used for the INNER crosshair pips once they've split. [0 - 1] | clientdll archive per_user |
| cl_crosshair_dynamic_splitalpha_outermod | If using cl_crosshairstyle 2, this is the alpha modification that will be used for the OUTER crosshair pips once they've split. [0.3 - 1] | clientdll archive per_user |
| cl_crosshair_dynamic_maxdist_splitratio | If using cl_crosshairstyle 2, this is the ratio used to determine how long the inner and outer xhair pips will be. [inner = cl_crosshairsize*(1-cl_crosshair_dynamic_maxdist_splitratio), outer = cl_crosshairsize*cl_crosshair_dynamic_maxdist_splitratio]  [0 - 1] | clientdll archive per_user |
| cl_show_observer_crosshair | Show the crosshair of the player being observed. 0: off 1: friends and party 2: everyone  | clientdll archive release |
| cl_observed_bot_crosshair | Control the crosshair shown when observing a bot. 0: Show player crosshair. 1: Show player crosshair only when bot can be taken over, otherwise show default.. 2: Always show default crosshair for bots. | clientdll archive release |
| cl_fixedcrosshairgap | For crosshair style 1: How big to make the gap between the pips in the fixed crosshair | clientdll archive per_user |
| cl_crosshair_t | T style crosshair | clientdll archive per_user |
| cl_show_quest_info |  | developmentonly clientdll |
| cl_paintkit_override |  | clientdll cheat release |
| econ_enable_inventory_images | allow inventory image rendering for use by scaleform | developmentonly clientdll |
| econ_inventory_image_pinboard |  | developmentonly clientdll |
| cl_ignore_campaign_completion_requirements | Ignores campaign progression requirements when granting quests. | developmentonly clientdll |
| cl_use_old_wearable_shoulddraw |  | developmentonly clientdll |
| cl_chatfilters | Stores the chat filter settings  | clientdll archive |
| radio_icons_use_particles | 0 = classic style, 1 = particles | developmentonly clientdll |
| cq_netgraph | Display command queue statistics on the hud | clientdll userinfo cheat |
| dota_toast_manager_override_duration |  | developmentonly clientdll |
| sticky_tooltips | Don't ever hide tooltips. Helpful when debugging complicated tooltip layouts. | developmentonly hidden clientdll |
| r_csgo_render_post_fxaa |  | developmentonly clientdll |
| csgo_render_post_colorcorrection |  | clientdll cheat |
| csgo_render_post_bloom |  | clientdll cheat |
| csgo_render_post_film_grain |  | clientdll cheat |
| csgo_render_dither_scale |  | clientdll cheat |
| csgo_render_post_mirror_horizontal |  | clientdll cheat |
| csgo_render_post_mirror_vertical |  | clientdll cheat |
| glow_outline_width | Width of glow outline effect in screen space. | clientdll cheat |
| r_bloom_tent_filter_radius | bloom mip up-sample filtering radius (using 3x3 tent filter, radius in mip level texels), 0.0 radius =&gt; box (2x2) filter with (fixed) 1.0 radius | developmentonly clientdll cheat |
| r_depth_of_field | 0 = off, 1 = enabled (high quality, circular bokeh, HDR) | developmentonly clientdll |
| r_dof2_radiusscale |  | developmentonly clientdll |
| r_dof2_maxblursize |  | developmentonly clientdll |
| mat_disable_normal_mapping |  | clientdll cheat |
| r_csgo_enable_tonemapping |  | clientdll cheat |
| r_csgo_enable_volume_fog |  | developmentonly clientdll |
| r_csgo_enable_cubemap_fog |  | developmentonly clientdll |
| r_csgo_enable_gradient_fog |  | developmentonly clientdll |
| r_csgo_shadows_debug |  | clientdll cheat |
| r_aoproxy_debug |  | clientdll cheat |
| r_aoproxy_enable |  | developmentonly clientdll |
| r_csgo_decal_debug |  | clientdll cheat |
| r_csgo_depth_prepass |  | clientdll cheat |
| r_csgo_depth_prepass_cull_threshold |  | clientdll cheat |
| r_csgo_depth_prepass_small_cull_threshold |  | clientdll cheat |
| r_csgo_depth_prepass_viewmodel |  | clientdll cheat |
| r_csgo_depth_prepass_players |  | clientdll cheat |
| r_csgo_depth_prepass_skybox_alpha_tested |  | clientdll cheat |
| r_csgo_render_opaque |  | clientdll cheat |
| r_csgo_render_overlays |  | clientdll cheat |
| r_csgo_render_decals |  | clientdll cheat |
| r_csgo_render_inferno_decals |  | clientdll cheat |
| r_csgo_render_decals_on_translucent |  | clientdll cheat |
| r_csgo_render_translucent |  | clientdll cheat |
| r_csgo_readonly_depth_stencil_enable |  | clientdll cheat |
| r_csgo_enable_glows |  | clientdll cheat |
| r_csgo_outline_glow_scaledenom |  | developmentonly clientdll cheat |
| r_csgo_enable_outlines |  | clientdll cheat |
| r_csgo_outline_width |  | developmentonly clientdll cheat |
| r_csgo_enable_translucent_screen_space |  | clientdll cheat |
| r_csgo_render_dynamic_objects |  | clientdll cheat |
| r_csgo_no_shader_resolve |  | clientdll cheat |
| cl_radial_menu_icon_radius |  | developmentonly clientdll |
| cl_radial_menu_tap_duration | If nothing in a radial menu is selected, and the button engaging the radial menu is released within this duration, fallback on the radial's tap functionality | developmentonly clientdll |
| cl_radial_coyote_time | Selection lenience: How long in seconds the last selected radial segment is used if no segment is selected. | developmentonly clientdll |
| cl_scoreboard_survivors_always_on |  | clientdll archive release |
| cl_dz_playagain_auto_spectate | Automatically switch to spectate mode after clicking the 'Play Again' button in end of match screen | clientdll archive release |
| r_dac_disable_portrait_world_renderer |  | developmentonly clientdll |
| csgo_monitorgamma_tv_exp |  | developmentonly clientdll |
| csgo_monitorgamma | monitor gamma (typically 2.2 for CRT and 1.7 for LCD) | clientdll archive |
| safezonex | The percentage of the screen width that is considered safe from overscan. Cannot result in a width less than the height. | clientdll archive |
| safezoney | The percentage of the screen height that is considered safe from overscan | clientdll archive |
| hud_scaling | Scales hud elements | clientdll archive |
| spec_death_panel_replay_position |  | developmentonly clientdll |
| cl_deathcampanel_position_dynamic | Turn on/off deathcam's kill panel dynamic Y movement | clientdll archive |
| death_panel_delay_time |  | developmentonly clientdll |
| death_panel_travel_time |  | developmentonly clientdll |
| csgo_demoui_player_death_seek_lead_up_time | Seek to a moment this amount of seconds leading up to a player death instead of the exact time of the death. | developmentonly clientdll |
| csgo_demoui_previous_event_search_offset | Do not consider events that happened in the last specified number of seconds when a user clicks 'previous' on the UI. | developmentonly clientdll |
| csgo_demoui_playbeck_timestep_value | Number of seconds to seek when using TimeStep buttons on demo playback controller. | developmentonly clientdll |
| hinttext_displaytime |  | developmentonly clientdll |
| cl_fake_timeout |  | developmentonly clientdll |
| cl_crosshair_friendly_warning | 0: off, 1: on | clientdll archive release |
| cl_ping_fade_deadzone | Distance from the crosshair over which the ping is completely invisible | clientdll archive release |
| cl_ping_fade_distance | Distance from the crosshair over which the ping fades | clientdll archive release |
| cl_playerspray_auto_apply | Automatically apply graffiti when graffiti menu closes | clientdll archive release |
| cl_crosshair_sniper_show_normal_inaccuracy | Include standing inaccuracy when determining sniper crosshair blur | clientdll archive per_user |
| cl_drawhud_specvote | 1: default; 0: disables vote UI for spectators | clientdll release |
| cl_disable_round_end_report |  | clientdll archive release |
| player_competitive_maplist_8_10_0_FB803604 |  | clientdll archive |
| player_competitive_maplist_2v2_10_0_DBAEB932 |  | clientdll archive |
| player_wargames_list2_10_0_DC207394 |  | clientdll archive |
| player_survival_list_10_0_303 |  | clientdll archive |
| cl_embedded_stream_audio_volume | Embedded stream audio volume | hidden clientdll archive |
| cl_embedded_stream_audio_volume_xmaster | Whether embedded stream audio volume gets multiplied by master volume | hidden clientdll archive |
| cl_embedded_stream_video_playing | Embedded stream video playing state | developmentonly hidden clientdll |
| cl_promoted_settings_acknowledged |  | clientdll archive |
| cl_mute_player_after_reporting_abuse | Mute players reported for abuse automatically. | developmentonly clientdll |
| cl_inventory_saved_filter2 |  | clientdll archive release |
| cl_inventory_saved_sort2 |  | clientdll archive release |
| cl_inventory_debug_tooltip |  | clientdll release |
| cl_access_all_missions |  | developmentonly clientdll |
| ui_lobby_draft_enabled |  | clientdll release |
| gotv_theater_container | Enables GOTV theater mode for the specified container, setting it to 'live' will play top live matches | clientdll release |
| cl_spec_stats |  | clientdll release |
| cl_server_graphic1_enable | When enabled, 360x60 (&lt;16kb) image file will be displayed to on-server spectators. | clientdll release |
| cl_server_graphic2_enable | When enabled, 220x45 (&lt;16kb) image file will be displayed to on-server spectators. | clientdll release |
| cl_accountprivacysetting1 |  | hidden clientdll release |
| partybrowser_throttle_data |  | developmentonly clientdll |
| partybrowser_timeout |  | developmentonly clientdll |
| cl_invites_only_friends | If turned on, will ignore in-game invites from recent teammates or other non-friends | clientdll archive release |
| cl_invites_only_mainmenu | If turned on, will ignore all invites when user is playing a match | clientdll archive release |
| cachedvalue_count_partybrowser |  | hidden clientdll archive |
| cl_voip_lobby_audio_volume | Lobby voip stream audio volume | developmentonly hidden clientdll |
| ui_nearbylobbies_filter3 |  | clientdll archive release |
| ui_playsettings_prime |  | clientdll archive release |
| ui_playsettings_mode_listen |  | clientdll archive release |
| ui_playsettings_mode_official_v20 |  | clientdll archive release |
| ui_playsettings_maps_official_casual |  | clientdll archive release |
| ui_playsettings_maps_official_deathmatch |  | clientdll archive release |
| ui_playsettings_maps_listen_competitive |  | clientdll archive release |
| ui_playsettings_maps_listen_scrimcomp2v2 |  | clientdll archive release |
| ui_playsettings_maps_listen_skirmish |  | clientdll archive release |
| ui_playsettings_maps_listen_casual |  | clientdll archive release |
| ui_playsettings_maps_listen_deathmatch |  | clientdll archive release |
| ui_playsettings_custom_preset |  | clientdll archive release |
| ui_playsettings_flags_listen_scrimcomp2v2 |  | clientdll archive release |
| ui_playsettings_flags_listen_skirmish |  | clientdll archive release |
| ui_playsettings_flags_listen_casual |  | clientdll archive release |
| ui_playsettings_flags_listen_survival |  | clientdll archive release |
| ui_playsettings_flags_listen_cooperative |  | clientdll archive release |
| ui_playsettings_flags_listen_competitive |  | clientdll archive release |
| ui_playsettings_flags_listen_deathmatch |  | clientdll archive release |
| ui_playsettings_flags_official_scrimcomp2v2 |  | clientdll archive release |
| ui_playsettings_flags_official_skirmish |  | clientdll archive release |
| ui_playsettings_flags_official_casual |  | clientdll archive release |
| ui_playsettings_flags_official_survival |  | clientdll archive release |
| ui_playsettings_flags_official_cooperative |  | clientdll archive release |
| ui_playsettings_flags_official_competitive |  | clientdll archive release |
| ui_playsettings_flags_official_deathmatch |  | clientdll archive release |
| ui_playsettings_directchallengekey |  | clientdll archive release |
| ui_playsettings_maps_workshop |  | clientdll archive release |
| ui_vanitysetting_team |  | clientdll archive release |
| ui_show_unlock_competitive_alert |  | clientdll archive release |
| ui_vanitysetting_loadoutslot_ct |  | clientdll archive release |
| ui_vanitysetting_loadoutslot_t |  | clientdll archive release |
| ui_news_last_read_link |  | clientdll archive release |
| ui_playsettings_warmup_map_name |  | clientdll archive release |
| ui_playsettings_survival_solo |  | clientdll archive release |
| ui_inventorysettings_recently_acknowledged |  | clientdll archive release |
| player_botdifflast_s |  | clientdll archive release |
| ui_deepstats_toplevel_mode |  | clientdll archive release |
| ui_deepstats_radio_heat_tab |  | clientdll archive release |
| ui_deepstats_radio_heat_team |  | clientdll archive release |
| snd_roundstart_volume | Volume of round start music | clientdll archive release |
| snd_roundaction_volume | Volume of round action music | clientdll archive release |
| snd_roundend_volume | Volume of round end music | clientdll archive release |
| snd_mapobjective_volume | Volume of map objective music | clientdll archive release |
| snd_tensecondwarning_volume | Volume of ten-second warning music | clientdll archive release |
| snd_deathcamera_volume | Volume of death camera music | clientdll archive release |
| snd_mvp_volume | Volume of round MVP music | clientdll archive release |
| voice_scale | Volume of incoming VOIP | clientdll archive release |
| player_nevershow_communityservermessage |  | clientdll archive per_user |
| ui_steam_overlay_notification_position | Steam overlay notification position | clientdll archive |
| ui_steam_overlay_notification_position_horz | Steam overlay notification position horizontal offset | clientdll archive |
| ui_steam_overlay_notification_position_vert | Steam overlay notification position vertical offset | clientdll archive |
| connect_lobby | Sets the lobby ID to connect to on start. | developmentonly hidden clientdll |
| trusted_launch | Trusted launch status | clientdll archive |
| snd_headphone_eq | Select Headphone EQ Preset | clientdll archive clientcmd_can_execute |
| cl_hide_avatar_images | Hide avatar images for other players. .   0 - Off..       1 - Block All.  2 - Block all but friends | clientdll archive |
| cl_show_equipped_character_for_player_avatars |  | clientdll archive |
| cl_buywheel_nomousecentering | Set non-zero to prevent buy wheel from centering mouse into the wheel origin | clientdll archive per_user release |
| cl_buywheel_nonumberpurchasing | Set non-zero to prevent buy wheel from purchasing via number keys | clientdll archive per_user release |
| cl_buywheel_donate_key | Set the key to use for donation in the buy menu. 0: Left Control; 1: Left Alt; 2: Left Shift. | clientdll archive per_user release |
| cl_compass_enabled |  | clientdll archive release |
| cl_inventory_radial_immediate_select | In inventory selection radials. Select weapons the moment the cursor highlights them. Otherwise, only select the selected item on exit. | clientdll archive per_user |
| cl_inventory_radial_tap_to_cycle | In inventory selection radials. Select weapons the moment the cursor highlights them. Otherwise, only select the selected item on exit. | clientdll archive per_user |
| cl_itemimages_dynamically_generated | 2: use render-targets, fallback to cache and disk; 1: no render targets, but use cache and fallback to disk; 0: disk assets only | clientdll archive release |
| c_csgo_itempreview_demo_scene |  | developmentonly clientdll |
| @panorama_3dpanel_camera_preset_blend_time | time to blend between camera presets | developmentonly clientdll |
| @panorama_3dpanel_anim_fadeinout_time_scale | temp scale factor for animation fade in/out time | developmentonly clientdll |
| @panorama_3dpanel_anims_pivotlock | default true. | developmentonly clientdll |
| @panorama_3dpanel_loadout_rotate_scale |  | developmentonly clientdll |
| @panorama_3dpanel_loadout_rotate_drag |  | developmentonly clientdll |
| @panorama_3dpanel_loadout_rotate_grab_scale |  | developmentonly clientdll |
| @panorama_3dpanel_loadout_rotate_frametime_multiplier |  | developmentonly clientdll |
| @panorama_3dpanel_camera_rotate_azimuth_scale |  | developmentonly clientdll |
| @panorama_3dpanel_camera_rotate_altitude_scale |  | developmentonly clientdll |
| @panorama_3dpanel_light_rotate_azimuth_scale |  | developmentonly clientdll |
| @panorama_3dpanel_light_rotate_altitude_scale |  | developmentonly clientdll |
| @panorama_3dpanel_light_move_scale |  | developmentonly clientdll |
| @panorama_3dpanel_camera_inout_scale_kb |  | developmentonly clientdll |
| @panorama_3dpanel_camera_inout_scale |  | developmentonly clientdll |
| @panorama_3dpanel_camera_lookat_scale |  | developmentonly clientdll |
| panorama_light_inout_scale |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_manifest |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_item |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_cam |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_paused |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_player |  | developmentonly clientdll |
| @panorama_3dpanel_debuginfo_anim |  | developmentonly clientdll |
| @panorama_3dpanel_camera_blend_mode |  | developmentonly clientdll |
| csgo_map_preview_scale |  | clientdll archive |
| mapoverview_allow_client_draw | Allow a client to draw on the map overview | clientdll release |
| mapoverview_icon_scale | Sets the icon scale multiplier for the overview map. Valid values are 0.5 to 3.0. | clientdll archive release |
| csgo_disable_preview_maps |  | developmentonly clientdll |
| csgo_debug_preview_maps |  | developmentonly clientdll |
| cl_map_preview_debug_jitter |  | developmentonly clientdll |
| cl_min_movie_time |  | developmentonly clientdll |
| cl_min_china_movie_time |  | developmentonly clientdll |
| csgo_vanity_defer_teleport |  | developmentonly clientdll |
| cl_quickinventory_lastinv |  | clientdll archive release |
| cl_quickinventory_line_update_speed |  | clientdll archive release |
| cl_quickinventory_filename |  | clientdll archive release |
| cl_radial_radio_tab |  | clientdll release |
| cl_radial_radio_tab_0_text_1 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_2 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_3 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_4 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_5 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_6 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_7 |  | clientdll archive release |
| cl_radial_radio_tab_0_text_8 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_1 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_2 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_3 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_4 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_5 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_6 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_7 |  | clientdll archive release |
| cl_radial_radio_tab_1_text_8 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_1 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_2 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_3 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_4 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_5 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_6 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_7 |  | clientdll archive release |
| cl_radial_radio_tab_2_text_8 |  | clientdll archive release |
| cl_radial_radio_version_reset |  | clientdll archive release |
| cl_radial_radio_tap_to_ping | When tapping the radial radio button, leave a ping if nothing is selected within the time in seconds set in cl_radial_menu_tap_duration | clientdll archive release |
| cl_radialmenu_deadzone_size |  | clientdll release |
| cl_radialmenu_deadzone_size_joystick |  | clientdll archive release |
| clTaserShakeFreqMin | how often the shake is applied (min time) | developmentonly clientdll |
| clTaserShakeFreqMax | how often the shake is applied (max time) | developmentonly clientdll |
| clTaserShakeTimeTotal | time the taser shake is applied. | developmentonly clientdll |
| viewmodel_presetpos | 1:"Desktop", 2:"Couch", 3:"Classic"  | clientdll archive |
| crosshair |  | clientdll archive per_user |
| lockMoveControllerRet |  | clientdll archive |
| hud_showtargetid | Enables display of target names | clientdll archive per_user |
| cl_drawhud_force_teamid_overhead | 0: default; 1: draw teamid even if hud disabled; -1: force no teamid | clientdll release |
| cl_versus_intro |  | clientdll archive release |
| cl_teamid_overhead_mode | Always show team id over teammates. 1 = pips; 2 = pips, name, and equipment | clientdll archive release |
| cl_teamid_overhead_colors_show | Show team overhead id in teammate color | clientdll archive release |
| cl_drawhud_force_deathnotices | 0: default; 1: draw deathnotices even if hud disabled; -1: force no deathnotices | clientdll release |
| cl_showloadout | Toggles display of current loadout. | clientdll archive per_user |
| cl_spec_mode | Saves the last viewed spectator mode for use next time we start to spectate | clientdll archive userinfo per_user server_can_execute |
| cl_draw_only_deathnotices | For drawing only the crosshair and death notices (used for moviemaking) | clientdll release |
| cl_radar_square_with_scoreboard | If set, the radar will toggle to square when the scoreboard is visible. | clientdll archive release |
| cl_radar_rotate | 1 | clientdll archive release |
| cl_radar_scale | Sets the radar scale. Valid values are 0.25 to 1.0. | clientdll archive release |
| cl_radar_always_centered | If set to 0, the radar is maximally used. Otherwise the player is always centered, even at map extents. | clientdll archive release |
| cl_radar_icon_scale_min | Sets the minimum icon scale. Valid values are 0.4 to 1.25. | clientdll archive release |
| cl_drawhud_force_radar | 0: default; 1: draw radar even if hud disabled; -1: force no radar | clientdll release |
| cl_radar_fast_transforms | Faster way of placing icons on the mini map. | developmentonly clientdll |
| cl_spec_swapplayersides | Toggle set the player names and team names to the opposite side in which they are are on the spectator panel. | clientdll release |
| default_fov |  | clientdll cheat |
| player_teamplayedlast |  | clientdll archive per_user |
| voice_vox | Voice chat uses a vox-style always on | clientdll archive per_user |
| voice_vox_current_peak | Current peak value (out of 64k) of the incoming voice stream | developmentonly clientdll |
| cl_autobuy | The order in which autobuy will attempt to purchase items | clientdll release |
| cl_rebuy | The order in which rebuy will attempt to repurchase items | clientdll release |
| spec_replay_colorcorrection | Amount of color correction in deathcam replay | developmentonly clientdll |
| cl_instant_death_anim |  | developmentonly clientdll |
| cl_disable_deathcam_audio_mix_fade_out | When set to true, disables audio being silenced while the death cam fades out. | clientdll release |
| cl_deathcam_audio_mix_phase1_fade_time | Sets the amount of time we fade out over. | clientdll release |
| cl_deathcam_audio_mix_phase1_fade_amount | Sets the amount of ducking to do on death cam fade out. When set to 1, full DeathFadeLayer is applied. | clientdll release |
| cl_deathcam_audio_mix_phase2_fade_time | Sets the amount of time we fade out over. | clientdll release |
| cl_deathcam_audio_mix_phase2_fade_amount | Sets the amount of ducking to do on death cam fade out. When set to 1, full DeathFadeLayer is applied. | clientdll release |
| cl_scoreboard_mouse_enable_binding | Name of the binding to enable mouse selection in the scoreboard | clientdll archive |
| snd_mute_mvp_music_live_players | If set, MVP music is muted if players from both teams are still alive. | clientdll archive release |
| force_spectator_only_tools |  | developmentonly hidden clientdll cheat |
| cl_debug_client_gamestats |  | developmentonly clientdll |
| steamworks_sessionid_lifetime_client | The full client session ID for the new steamworks gamestats. | developmentonly hidden clientdll |
| cl_debug_round_stat_submission |  | developmentonly clientdll |
| cl_csgo_shoot_debugvis_show_rdp |  | developmentonly clientdll |
| cl_csgo_shoot_debugvis_rdp_text_x |  | developmentonly clientdll |
| cl_csgo_shoot_debugvis_rdp_text_l |  | developmentonly clientdll |
| cl_csgo_shoot_debugvis_show_los | Show line of last shot. | developmentonly clientdll |
| net_client_steamdatagram_ping_measurement_direct_only | Comma-separated list of data center codes where ping measurement should be based on direct ping only, not best triangulated ping. | developmentonly clientdll |
| net_client_steamdatagram_enable_override | 0: Use connect method requested by GC.  &gt;0: Always use SDR if possible.  &lt;0: Always use direct UDP if possible | clientdll release |
| cl_show_matchmaking_stat_spew |  | developmentonly clientdll |
| lobby_stats_fake |  | developmentonly clientdll |
| lobby_gamesearch_fake |  | developmentonly clientdll |
| cl_session |  | developmentonly hidden server_can_execute |
| tv_spectator_port_offset |  | clientdll release |
| cl_player_visibility_stencil_bloat_amount_box |  | developmentonly clientdll |
| cl_player_visibility_stencil_bloat_amount_ellipsoid |  | developmentonly clientdll |
| cl_player_visiblity_show_stencil_proxy |  | developmentonly clientdll |
| cl_player_visiblity_stencil_proxy_min_dist |  | developmentonly clientdll |
| cl_player_visibility_stencil_proxy_min_dist_box |  | developmentonly clientdll |
| cl_player_visibility_stencil_proxy_type | 0 - box, 1 - dodecahedron | developmentonly clientdll |
| cl_player_visibility_near | cull characters nearer than this | developmentonly clientdll |
| cl_player_visibility_far | distance at which proxy scale is maximized | developmentonly clientdll |
| cl_player_visibility_far_scale | proxy scale multiplier at max dist (is 1.0 at mindist) | developmentonly clientdll |
| cl_track_aim_head_threshold | Notify render device when rendering a frame with enemy head within threshold distance | clientdll release |
| cl_track_aim_head_log_closest | Log when closest distance to head was reached and what it was | clientdll release |
| cl_track_render_eye_angles | Spew render eye angles | clientdll release |
| cl_lagcompensation_test_target | Player whose head is tracked to test lag compensation. | developmentonly clientdll |
| cl_lagcompensation_test_auto_target | Auto-pick value of cl_lagcompensation_test_target. | developmentonly clientdll |
| smoke_volume_lod_ratio_change |  | developmentonly clientdll |
| cl_clutch_mode | Silence voice and other distracting sounds until the end of round or next death. | developmentonly clientdll |
| cl_mute_enemy_team | Block all communication from players on the enemy team. | clientdll archive |
| cl_mute_all_but_friends_and_party | Only allow communication from friends and matchmaking party members. Set to 1 to apply the in non-competitive game modes. Set to 2 will apply the setting in all modes.. | clientdll archive |
| r_drawdetailprops |  | developmentonly clientdll |
| r_detail_lerp_znormal |  | developmentonly clientdll |
| r_detailprop_lod_dist |  | developmentonly clientdll |
| r_detailprop_fade_dist |  | developmentonly clientdll |
| r_detailprop_force_probe |  | developmentonly clientdll |
| damage_impact_heavy | Damage ABOVE this value is considered heavy damage | developmentonly clientdll |
| damage_impact_medium | Damage BELOW this value is considered light damage | developmentonly clientdll |
| directional_blood_impacts | 1 means we calculate the direction outward from the hit players body in relation to local client | developmentonly clientdll |
| steam_controller_haptics |  | clientdll release |
| steamworks_sessionid_client | The client session ID for the new steamworks gamestats. | hidden clientdll userinfo |
| r_drawchickens | Render chickens | clientdll cheat |
| inferno_dlight_spacing | Inferno dlights are at least this far apart | clientdll cheat |
| inferno_dlights | Min FPS at which molotov dlights will be created | developmentonly clientdll |
| inferno_fire |  | developmentonly clientdll |
| Inferno_concav_plane_threshold |  | developmentonly clientdll |
| inferno_batched_rays |  | developmentonly clientdll |
| snd_mainmenu_music_break_time_min | Minimum amount of time to pause between playing main menu music | clientdll cheat |
| snd_mainmenu_music_break_time_max | Maximum amount of time to pause between playing main menu music | clientdll cheat |
| snd_menumusic_volume | Volume of main menu music | clientdll archive release |
| snd_othermusic_volume | Volume of unclassified music | clientdll archive release |
| r_drawdevvisualizers | Render dev visualizers | clientdll cheat |
| fog_start |  | clientdll cheat |
| fog_end |  | clientdll cheat |
| fog_startskybox |  | clientdll cheat |
| fog_endskybox |  | clientdll cheat |
| fog_maxdensityskybox |  | clientdll cheat |
| fog_colorskybox |  | clientdll cheat |
| fog_enableskybox |  | clientdll cheat |
| fog_maxdensity |  | clientdll cheat |
| fog_hdrcolorscaleskybox |  | clientdll cheat |
| voice_modenable | Enable/disable voice in this mod. | clientdll archive clientcmd_can_execute |
| voice_clientdebug |  | developmentonly clientdll |
| voice_all_icons | Draw all players' voice icons | developmentonly clientdll |
| hud_fastswitch |  | clientdll archive |
| cc_linger_time | Close caption linger time. | clientdll archive |
| cc_delay_time | Close caption delay before showing caption. | clientdll archive |
| cc_captiontrace | Show missing closecaptions (0 = no, 1 = devconsole, 2 = show in hud) | developmentonly clientdll |
| cc_log | Log caption names and contents (0 = off, 1 = found captions, 2 = unfound captions, 3 = all captions) | developmentonly clientdll |
| cc_subtitles | If set, don't show sound effect captions, just voice overs (i.e., won't help hearing impaired players). | clientdll archive |
| english | If set to 1, running the english language set of assets. | clientdll userinfo |
| cc_vr_debug | Debug visualization of VR closed caption placement | developmentonly clientdll |
| cc_vr_depth_test | Have closed caption Panorama panel perform depth testing against the scene | developmentonly clientdll |
| cc_vr_forward_offset | Subtitle offset distance (forward, in front of player) | developmentonly clientdll |
| cc_vr_vertical_offset | Subtitle vertical offset distance (positive is up) | developmentonly clientdll |
| cc_vr_epsilon | Epsilon to trigger movement of VR subtitle panel in world space | developmentonly clientdll |
| cc_vr_caption_catchup_interval | Duration it takes for attached caption to ideal point | developmentonly clientdll |
| cc_vr_font_size | 0 = small, 1 = med (default), 2 = large | clientdll archive |
| cc_vr_caption_speed | 0 = slow, 1 = medium (default), 2 = fast | clientdll archive |
| cc_spectator_only |  | clientdll archive |
| cc_vr_width | 0 = narrow, 1 = med (default), 2 = wide | clientdll archive |
| cc_lang | Current close caption language (emtpy = use game UI language) | clientdll archive |
| r_RainParticleDensity | Density of Particle Rain 0-1 | developmentonly clientdll |
| r_RainAllowInSplitScreen | Allows rain in splitscreen | developmentonly clientdll |
| r_debug_precipitation | Show precipitation volumes | clientdll cheat |
| r_decals |  | developmentonly clientdll |
| cl_fasttempentcollision |  | developmentonly clientdll |
| cl_tracer_whiz_distance |  | developmentonly clientdll |
| cl_tracer_whiz_infront_distance |  | developmentonly clientdll |
| fx_drawmetalspark | Draw metal spark effects. | developmentonly clientdll |
| cl_playerspraydisable | Disable player sprays. | clientdll archive |
| spec_replay_outline | Enable outline selecting victim in hltv replay: 0 - none; 1 - ouline YOU; 2 - outline YOU, with red ragdoll outline; 3 - normal spectator outlines | developmentonly clientdll |
| spec_glow_silent_factor | Lurking player xray glow scaling. | clientdll release |
| spec_glow_spike_factor | Noisy player xray glow scaling (pop when noise is made).  Make &gt;1 to add a 'spike' to noise-making players | clientdll release |
| spec_glow_full_time | Noisy players stay at full brightness for this long. | clientdll release |
| spec_glow_decay_time | Time to decay glow from 1.0 to spec_glow_silent_factor after spec_glow_full_time. | clientdll release |
| spec_glow_spike_time | Time for noisy player glow 'spike' to show that they made noise very recently. | clientdll release |
| spec_show_xray | If set to 1, you can see player outlines and name IDs through walls - who you can see depends on your team and mode | clientdll archive release |
| r_drawcsplayers | Render CS players | clientdll cheat |
| cl_random_taser_bone_y | The Y position used for the random taser force. | developmentonly clientdll |
| cl_random_taser_force_y | The Y position used for the random taser force. | developmentonly clientdll |
| cl_random_taser_power | Power used when applying the taser effect. | developmentonly clientdll |
| cl_ragdoll_workaround_threshold | Mainly cosmetic, client-only effect: when client doesn't know the last position of another player that spawns a ragdoll, the ragdoll creation is simplified and ragdoll is created in the right place. If you increase this significantly, ragdoll positions on your client may be dramatically wrong, but it won't affect other clients | clientdll release |
| cl_ragdoll_physics_enable | Enable/disable ragdoll physics. | developmentonly clientdll |
| cl_show_head_trajectory |  | developmentonly clientdll |
| cl_show_camera_position |  | developmentonly clientdll |
| sv_smoke_volume_blind_start |  | developmentonly clientdll |
| cl_crosshair_sniper_width | If &gt;1 sniper scope cross lines gain extra width (1 for single-pixel hairline) | clientdll archive per_user |
| sv_show_ragdoll_playernames |  | clientdll replicated release missing3 |
| debug_entity_outline_highlight |  | clientdll cheat |
| cl_player_lighting_origin_offset |  | developmentonly clientdll |
| cl_display_player_visibilty |  | developmentonly clientdll |
| cl_display_flashbang_values |  | developmentonly clientdll |
| cl_color | Preferred teammate color | clientdll archive userinfo |
| cl_borrow_music_from_player_slot |  | developmentonly clientdll |
| spec_xray_dropped_defusekits | Whether to X-ray dropped defuse kits. | clientdll release |
| spec_xray_dropped_unoccluded | Whether to always X-ray dropped c4 and defuse kits. | clientdll release |
| cl_spec_show_bindings | Toggle the visibility of the spectator bindings. | clientdll release clientcmd_can_execute |
| cl_minmodels | Uses one player model for each team.  Set this value to -1 to allow unapproved / in progress player models to be used. | developmentonly clientdll |
| cl_min_ct | Controls which CT model is used when cl_minmodels is set to 1. | developmentonly clientdll |
| cl_min_t | Controls which Terrorist model is used when cl_minmodels is set to 1. | developmentonly clientdll |
| cl_teamid_overhead_maxdist | max distance at which the overhead team id icons will show | clientdll cheat per_user |
| cl_teamid_overhead_maxdist_spec | max distance at which the overhead team id icons will show when a spectator | clientdll cheat per_user |
| cl_show_equipment_value |  | developmentonly clientdll |
| cl_show_clan_in_death_notice | Is set, the clan name will show next to player names in the death notices. | clientdll archive release |
| cl_dm_buyrandomweapons | Player will automatically receive a random weapon on spawn in deathmatch if this is set to 1 (otherwise, they will receive the last weapon) | clientdll archive release |
| cl_hud_color | 0 = default, 1 = light blue, 2 = orange, 3 = green, 4 = purple, 5 = white. | clientdll archive release |
| cl_hud_radar_scale |  | clientdll archive release |
| cl_use_entity_as_targetid |  | developmentonly clientdll |
| cl_dangerzone_approaching_sound_radius |  | clientdll cheat release |
| cl_dangerzone_sound_volume |  | clientdll cheat release |
| cl_dangerzone_moving_sound_volume |  | clientdll cheat release |
| cl_weapon_pickup_lerp |  | developmentonly clientdll |
| character_patches |  | developmentonly clientdll |
| cl_firstperson_legs |  | developmentonly clientdll |
| cl_smoke_player_particle_effect |  | clientdll cheat |
| cl_weapon_clip_thinwalls |  | clientdll replicated cheat |
| cl_weapon_clip_thinwalls_debug |  | clientdll replicated cheat |
| cl_weapon_clip_thinwalls_lock |  | clientdll replicated cheat |
| thirdperson_lockcamera |  | clientdll replicated cheat |
| cl_player_proximity_debug |  | clientdll replicated cheat |
| cl_view_near_hud_player_eye_dist |  | developmentonly clientdll |
| cl_view_near_other_player_eye_dist |  | developmentonly clientdll |
| clDrawTargetIDTrace | visualizing line trace for target ID | developmentonly clientdll |
| m_yaw | Mouse yaw factor. | clientdll archive per_user |
| m_pitch | Mouse pitch factor. | clientdll archive per_user |
| joy_display_input |  | clientdll archive |
| dev_create_sensitivity_report |  | developmentonly clientdll |
| cl_vprof_scope_entity_gamephys |  | developmentonly clientdll |
| r_propsmaxdist | Maximum visible distance | developmentonly clientdll |
| cl_predictweapons | Perform client side prediction of weapon effects. | clientdll userinfo |
| cl_lagcompensation | Perform server side lag compensation of weapon firing events. | clientdll userinfo |
| cl_showerror | Show prediction errors, 2 for above plus detailed field deltas, 3 to filter out serverside known prediction errors, -entindex for specific entity. | clientdll release |
| cl_error_report_time | Minimum time in seconds that must elapse before printing prediction error summary. 0 to disable. | clientdll release |
| cl_pdump | Dump info about this entity to screen. | clientdll cheat |
| cl_pclass | Dump entity by prediction classname. | clientdll cheat |
| cl_pred_optimize | Optimize for not copying data if didn't receive a network update (1), and also for not repredicting if there were no errors (2). | developmentonly clientdll |
| cl_pred_parallel_postnetwork |  | developmentonly clientdll |
| cl_ragdoll_lru_debug |  | clientdll replicated cheat |
| cl_ragdoll_limit | Maximum number of ragdolls to show (-1 disables limit) | clientdll archive |
| snd_sound_areas_debug |  | clientdll replicated cheat |
| snd_sound_areas_debug_interval |  | clientdll replicated cheat |
| cl_snd_new_visualize | Displays soundevent name played at it's 3d position | clientdll cheat |
| viewmodel_fov | Viewmodel FOV | clientdll archive |
| cl_leveloverview |  | clientdll cheat |
| r_mapextents | Set the max dimension for the map.  This determines the far clipping plane | clientdll cheat |
| gl_clear |  | developmentonly clientdll |
| gl_clear_randomcolor | Clear the back buffer to random colors every frame. Helps spot open seams in geometry. | clientdll cheat |
| gl_clear_gray | Clear the back buffer to gray every frame. | clientdll cheat |
| r_nearz | Override the near clipping plane. -1 means use the default. | clientdll cheat |
| r_farz | Override the far clipping plane. -1 means to use the value in env_fog_controller. | clientdll cheat |
| cl_demoviewoverride | Override view during demo playback | developmentonly clientdll |
| cl_demo_view_offset_left | View offset during demo playback (+/- 1.25 is a good default for human average left/right eye offset) | developmentonly clientdll |
| cl_lock_camera |  | clientdll cheat |
| _fov | Automates fov command to server. | developmentonly clientdll |
| cl_demo_steadycam_enable | Stabilize camera orientation/position during demo playback.  1 == remove roll, 2 == steadycam | developmentonly clientdll |
| cl_demo_steadycam_radius | if camera moves this much from last anchor update anchor | developmentonly clientdll |
| cl_demo_steadycam_deflection | if camera orientation changes this much update orientation | developmentonly clientdll |
| cl_demo_steadycam_blendframes | blend over this many frames | developmentonly clientdll |
| fade_debug_splitscreen_slot |  | developmentonly clientdll |
| shake_show | Displays a list of the active screen shakes. | developmentonly clientdll |
| r_screen_size_expansion |  | developmentonly clientdll |
| c_thirdpersonshoulderaimdist |  | clientdll archive |
| joy_name |  | clientdll archive |
| joy_advanced |  | clientdll archive |
| joy_advaxisx |  | clientdll archive |
| joy_advaxisy |  | clientdll archive |
| joy_advaxisz |  | clientdll archive |
| joy_advaxisr |  | clientdll archive |
| joy_advaxisu |  | clientdll archive |
| joy_advaxisv |  | clientdll archive |
| joy_sidesensitivity |  | clientdll archive |
| joy_pitchsensitivity |  | clientdll archive per_user |
| joy_yawsensitivity |  | clientdll archive per_user |
| joy_movement_stick | Which stick controls movement (0 is left stick) | clientdll archive per_user |
| joy_xcontroller_cfg_loaded | If 0, the 360controller.cfg file will be executed on startup & option changes. | developmentonly clientdll |
| cl_mouselook | Set to 1 to use mouse for look, 0 for keyboard look. Cannot be set while connected to a server. | notconnected clientdll archive userinfo per_user |
| cl_drawhud | Enable the rendering of the hud | clientdll cheat |
| fov_desired | Sets the base field-of-view. | clientdll archive userinfo |
| cl_glow_item_far_r |  | clientdll release |
| cl_glow_item_far_g |  | clientdll release |
| cl_glow_item_far_b |  | clientdll release |
| cl_glow_brightness | Brightness of player halos | clientdll cheat |
| mat_colcorrection_editor |  | developmentonly clientdll |
| compositematerial_showdebugwindow | Source2/Composite Material Debug | developmentonly clientdll archive replicated cheat menubar_item |
| r_decals_default_start_fade |  | developmentonly clientdll replicated |
| r_decals_default_fade_duration |  | developmentonly clientdll replicated |
| r_flashlightlockposition |  | clientdll cheat |
| r_flashlightfov |  | clientdll replicated cheat |
| r_flashlightoffsetright |  | clientdll replicated cheat |
| r_flashlightoffsetup |  | clientdll replicated cheat |
| r_flashlightoffsetforward |  | clientdll replicated cheat |
| r_flashlightnear |  | clientdll replicated cheat |
| r_flashlightfar |  | clientdll replicated cheat |
| r_flashlightconstant |  | clientdll replicated cheat |
| r_flashlightquadratic |  | clientdll replicated cheat |
| r_flashlightbrightness |  | clientdll replicated cheat |
| r_flashlightvisualizetrace |  | clientdll cheat |
| r_flashlightambient |  | clientdll cheat |
| r_flashlightshadowatten |  | clientdll cheat |
| r_flashlightladderdist |  | clientdll cheat |
| r_flashlightlinear |  | clientdll replicated cheat |
| r_muzzleflashlinear |  | clientdll replicated cheat |
| r_muzzleflashbrightness |  | clientdll replicated cheat |
| r_flashlightnearoffsetscale |  | clientdll cheat |
| r_flashlighttracedistcutoff |  | clientdll cheat |
| r_flashlightbacktraceoffset |  | clientdll cheat |
| r_flashlighttracedistwatercutoff |  | clientdll cheat |
| muzzle_flash_debug |  | developmentonly clientdll |
| r_flashlightmuzzleflashfov |  | clientdll cheat |
| cl_async_client_shatter | spawn client glass shards asynchronously during demos or when remotely connected. | developmentonly clientdll |
| r_impacts_alt_orientation |  | developmentonly clientdll |
| r_impacts_decal_grazing_incidence_cutoff |  | developmentonly clientdll |
| r_impacts_decal_grazing_incidence_variance |  | developmentonly clientdll |
| r_impact_ricochet_chance |  | developmentonly clientdll |
| r_drawtracers |  | clientdll cheat |
| r_drawtracers_firstperson |  | developmentonly clientdll |
| cl_show_splashes |  | developmentonly clientdll |
| glow_use_tolerance |  | clientdll replicated cheat |
| spec_autodirector | Auto-director chooses best view modes while spectating | developmentonly clientdll clientcmd_can_execute |
| locator_topdown_style | Topdown games set this to handle distance and offscreen location differently. | developmentonly clientdll |
| hidehud | bitmask: 1=weapon selection, 2=flashlight, 4=all, 8=health, 16=player dead, 32=needssuit, 64=misc, 128=chat, 256=crosshair, 512=vehicle crosshair, 1024=in vehicle | clientdll cheat |
| joy_vehicle_turn_lowend |  | developmentonly clientdll |
| joy_vehicle_turn_lowmap |  | developmentonly clientdll |
| joy_sensitive_step0 |  | developmentonly clientdll |
| joy_sensitive_step1 |  | developmentonly clientdll |
| joy_sensitive_step2 |  | developmentonly clientdll |
| joy_lowend |  | developmentonly clientdll |
| joy_lowmap |  | developmentonly clientdll |
| joy_accelscale |  | developmentonly clientdll |
| joy_accelmax |  | developmentonly clientdll |
| joy_pegged |  | developmentonly clientdll |
| joy_virtual_peg |  | developmentonly clientdll |
| joy_accel_filter |  | developmentonly clientdll |
| joy_response_look |  | clientdll archive per_user |
| joy_response_move |  | clientdll archive per_user |
| joy_response_move_vehicle |  | developmentonly clientdll |
| joy_circle_correct_mode |  | clientdll archive per_user |
| joy_circle_correct_mode_vehicle |  | clientdll archive per_user |
| mouse_inverty |  | clientdll archive |
| joy_pitch_sensitivity |  | clientdll archive per_user |
| joy_yaw_sensitivity |  | clientdll archive per_user |
| joy_forward_sensitivity |  | clientdll archive per_user |
| joy_side_sensitivity |  | clientdll archive per_user |
| joy_autosprint | Automatically sprint when moving with an analog joystick | developmentonly clientdll |
| sensitivity | Mouse sensitivity. | clientdll archive per_user |
| mat_depthbias_shadowmap |  | developmentonly clientdll |
| cl_globallight_orig_calc_frustum |  | developmentonly clientdll |
| cl_globallight_world_bottom_height |  | developmentonly clientdll |
| cl_globallight_world_top_height |  | developmentonly clientdll |
| cl_globallight_use_alt_focus_region |  | developmentonly clientdll |
| cl_globallight_slope_scale_depth_bias |  | developmentonly clientdll |
| cl_globallight_depth_bias |  | developmentonly clientdll |
| cl_globallight_use_shaadow_near_offset |  | developmentonly clientdll |
| cl_cameraoverride_fade_in_amount |  | developmentonly clientdll |
| cl_cameraoverride_shadow_depth_bias |  | developmentonly clientdll |
| cl_cameraoverride_shadow_end |  | developmentonly clientdll |
| cl_globallight_use_optimized_calc_frustum |  | developmentonly clientdll |
| fish_debug | Show debug info for fish | clientdll cheat |
| r_monitor_3dskybox |  | developmentonly clientdll |
| gameinstructor_verbose | Set to 1 for standard debugging or 2 (in combo with gameinstructor_verbose_lesson) to show update actions. | clientdll cheat |
| gameinstructor_verbose_lesson | Display more verbose information for lessons have this name. | clientdll cheat |
| gameinstructor_find_errors | Set to 1 and the game instructor will run EVERY scripted command to uncover errors. | clientdll cheat |
| gameinstructor_enable | Display in game lessons that teach new players. | clientdll archive release |
| gameinstructor_start_sound_cooldown | Number of seconds forced between similar lesson start sounds. | developmentonly clientdll |
| cl_voiceenabled |  | developmentonly clientdll |
| commentary_node_use_viewfacing |  | developmentonly clientdll |
| rope_shake |  | developmentonly clientdll |
| rope_subdiv | Rope subdivision amount | developmentonly clientdll |
| rope_collide | Collide rope with the world | developmentonly clientdll |
| rope_smooth_enlarge | How much to enlarge ropes in screen space for antialiasing effect | developmentonly clientdll |
| rope_smooth_minwidth | When using smoothing, this is the min screenspace width it lets a rope shrink to | developmentonly clientdll |
| rope_smooth_minalpha | Alpha for rope antialiasing effect | developmentonly clientdll |
| rope_smooth_maxalphawidth |  | developmentonly clientdll |
| rope_smooth_maxalpha | Alpha for rope antialiasing effect | developmentonly clientdll |
| r_drawropes |  | clientdll cheat |
| r_ropetranslucent |  | developmentonly clientdll |
| rope_wind_dist | Don't use CPU applying small wind gusts to ropes when they're past this distance. | developmentonly clientdll |
| rope_averagelight | Makes ropes use average of cubemap lighting instead of max intensity. | developmentonly clientdll |
| cl_sceneentity_debug | Display all thinking scene entities and its data. | developmentonly clientdll |
| mp_usehwmvcds | Enable the use of the hw morph vcd(s). (-1 = never, 1 = always, 0 = based upon GPU) | developmentonly clientdll |
| scene_vcdautosave | Create a savegame before VCD playback | developmentonly clientdll |
| tv_listen_voice_indices | Bitfield of playerslots to listen to voice messages from when connected to SourceTV, default is none | clientdll userinfo |
| tv_listen_voice_indices_h | High 32 bits of bitfield of playerslots to listen to voice messages from when connected to SourceTV, default is none | clientdll userinfo |
| mic_listen_while_nonfocused | Enables the ability for the mic to remain open if the window loses focus such as when a caster tabs out to adjust settings | developmentonly clientdll |
| soundscape_fadetime | Time to crossfade sound effects between soundscapes | clientdll cheat |
| soundscape_message |  | developmentonly clientdll |
| soundscape_radius_debug | Prints current volume of radius sounds | clientdll cheat |
| r_drawsprites |  | clientdll cheat |
| freecamera_fog_start | Fog start for Free Camera. | developmentonly clientdll |
| freecamera_fog_end | Fog end for Free Camera. | developmentonly clientdll |
| freecamera_zfar | Fog start for Free Camera. | developmentonly clientdll |
| freecamera_rotation_multiplier | Tweak this parameter to adjust Free Camera mouse rotation. | developmentonly clientdll |
| freecamera_max_speed | Tweak this parameter to adjust Free Camera movement max speed. | developmentonly clientdll |
| freecamera_accel | Tweak this parameter to adjust Free Camera movement acceleration. | developmentonly clientdll |
| stats_highlight_interval | Interval between hightlight screens in the transition stats panel | developmentonly clientdll |
| cl_change_callback_limit | change callback msec warning limit | clientdll release |
| cl_ShowBoneSetupEnts | Show which entities are having their bones setup each frame. | developmentonly clientdll |
| cpu_level | CPU Level - Default: High | developmentonly clientdll |
| gpu_level | GPU Level - Default: High | developmentonly clientdll |
| mem_level | Memory Level - Default: High | developmentonly clientdll |
| gpu_mem_level | Memory Level - Default: High | developmentonly clientdll |
| cl_dormant_spew | Spew state on when client entities become dormant or active. | developmentonly clientdll |
| cl_showtextmsg | Enable/disable text messages printing on the screen. | developmentonly clientdll |
| cl_chat_active |  | developmentonly clientdll |
| cl_showfps | Draw fps meter at top of screen (1 = fps, 2 = smooth fps, 3 = server MS, 4 = Show FPS and Log to file ) | clientdll release |
| cl_showpos | Draw current position at top of screen | clientdll release |
| cl_showmem | Draw approximate memory use at top of screen | clientdll release |
| report_clientthinklist | List all clientside entities thinking and time - will report and turn itself off. | clientdll cheat |
| vprof_scope_entity_clientthink | Does nothing whatsoever. | developmentonly hidden clientdll |
| cl_showusercmd | Show user command encoding | developmentonly clientdll |
| cl_anglespeedkey |  | developmentonly clientdll |
| cl_yawspeed |  | developmentonly clientdll |
| cl_pitchspeed |  | developmentonly clientdll |
| cl_pitchdown |  | clientdll cheat |
| cl_pitchup |  | clientdll cheat |
| cl_steamcontroller |  | developmentonly clientdll |
| joystick | True if the joystick is enabled, false otherwise. | clientdll archive |
| cl_boxmove | run in a square, # represents how many usercommands to run before turning. | developmentonly clientdll |
| cl_boxmove_speed | how fast to run (1 to use player max run speed). | developmentonly clientdll |
| ss_mimic | Split screen users mimic base player's CUserCmds | developmentonly clientdll cheat |
| cam_snapto |  | clientdll archive |
| cam_ideallag | Amount of lag used when matching offset to ideal angles in thirdperson view | clientdll archive |
| cam_idealdelta | Controls the speed when matching offset to ideal angles in thirdperson view | clientdll archive |
| cam_idealyaw |  | clientdll archive |
| cam_idealpitch |  | clientdll archive |
| cam_idealdist |  | clientdll archive |
| cam_collision | When in thirdperson and cam_collision is set to 1, an attempt is made to keep the camera from passing though walls. | clientdll archive |
| cam_showangles | When in thirdperson, print viewangles/idealangles/cameraoffsets to the console. | clientdll cheat |
| c_maxpitch |  | clientdll archive |
| c_minpitch |  | clientdll archive |
| c_maxyaw |  | clientdll archive |
| c_minyaw |  | clientdll archive |
| c_maxdistance |  | clientdll archive |
| c_mindistance |  | clientdll archive |
| c_orthowidth |  | clientdll archive |
| c_orthoheight |  | clientdll archive |
| c_thirdpersonshoulder |  | clientdll archive |
| c_thirdpersonshoulderoffset |  | clientdll archive |
| c_thirdpersonshoulderdist |  | clientdll archive |
| c_thirdpersonshoulderheight |  | clientdll archive |
| game_particle_manager_requeue_messages |  | developmentonly hidden clientdll |
| cl_hold_game_events_until_server_tick | Holds game events until client has received the tick the event was fired on. | developmentonly clientdll |
| cl_hold_game_events_force_delay_ticks | Debugging convar to force late dispatch of game events. | developmentonly clientdll |
| cl_net_showevents | Dump game events to console (1=client only, 2=all). | developmentonly clientdll |
| cl_net_showeventlisteners | Show listening addition/removals | developmentonly clientdll |
| cl_display_game_events |  | clientdll cheat |
| ent_revert_dormancy_change |  | developmentonly clientdll |
| r_draw3dskybox |  | developmentonly clientdll |
| option_duck_method | Input toggle control | clientdll archive userinfo per_user |
| spec_chasedistance | Chase cam's ideal distance from target | developmentonly clientdll |
| spec_centerchasecam | Looks at the target player's center, instead of his eye position, in chase came mode | clientdll archive |
| spec_track | Tracks an entity in spec mode | developmentonly clientdll |
| bot_mimic_spec_buttons | +attack, +jump etc are used for spectator control instead of being passed on to spectated bot | clientdll cheat |
| cl_skeleton_instance_smear_boneflags | Smear boneflags across the model.  Costs computation, but tests to make sure your bone flags are consistent. | clientdll cheat |
| cl_phys_networked_start_sleep |  | developmentonly clientdll |
| cloth_debug_draw |  | developmentonly clientdll |
| cloth_update |  | developmentonly clientdll |
| cloth_iv_dump |  | developmentonly clientdll |
| r_enable_rigid_animation |  | developmentonly clientdll |
| cl_ent_showonlyhitbox |  | clientdll cheat |
| cl_interp_threadmodeticks | Additional interpolation ticks to use when interpolating with threaded engine mode set. | developmentonly clientdll |
| report_cliententitysim | List all clientside simulations and time - will report and turn itself off. | clientdll cheat |
| cl_extrapolate | Enable/disable extrapolation if interpolation history runs out. | clientdll cheat |
| cl_interp_npcs | Interpolate NPC positions starting this many seconds in past (or cl_interp, if greater) | developmentonly clientdll |
| cl_interp_all | Disable interpolation list optimizations. | developmentonly clientdll |
| r_drawmodeldecals |  | developmentonly clientdll |
| cl_simulate_dormant_entities |  | developmentonly clientdll |
| cl_draw_simulating_entities |  | developmentonly clientdll |
| cl_draw_simulating_entities_distance |  | developmentonly clientdll |
| ent_test_interpolation |  | developmentonly clientdll |
| cl_interp_animationvars | Interpolate LATCH_ANIMATION_BIT vars if interpolation interval is greater than simulation interval | developmentonly clientdll |
| cl_interp_simulationvars | Interpolate LATCH_SIMULATION_BIT vars if interpolation interval is greater than animation interval | developmentonly clientdll |
| iv_wrapped_parallel_latch |  | developmentonly clientdll |
| iv_parallel_latch |  | developmentonly clientdll |
| iv_parallel_restore |  | developmentonly clientdll |
| cl_latch_report | Enable to output stats about latching | clientdll archive |
| cl_interpolate_report | Enable to show interpolation profile timing. | clientdll archive |
| cl_interp_hermite | Set to zero do disable hermite interpolation. | clientdll cheat |
| cl_extrapolate_amount | Set how many seconds the client will extrapolate entities for. | clientdll cheat |
| phonemedelay | Phoneme delay to account for sound system latency. | developmentonly clientdll |
| phonemefilter | Time duration of box filter to pass over phonemes. | developmentonly clientdll |
| blink_duration | How many seconds an eye blink will last. | developmentonly clientdll |
| cl_viewtarget_clamp |  | developmentonly clientdll |
| cl_enable_eye_occlusion |  | developmentonly clientdll |
| cl_eye_occlusion_debug |  | clientdll cheat |
| enable_boneflex |  | clientdll archive |
| phonemesnap | Lod at level at which visemes stops always considering two phonemes, regardless of duration. | developmentonly clientdll |
| cl_eye_target_override |  | developmentonly clientdll |
| cl_eye_yaw_multiplier |  | developmentonly clientdll |
| cl_eye_sin_wave |  | developmentonly clientdll |
| cl_smooth | Smooth view/eye origin after prediction errors | developmentonly clientdll |
| cl_smoothtime | Smooth client's view after prediction error over this many seconds | developmentonly clientdll |
| zoom_sensitivity_ratio | Additional mouse sensitivity scale factor applied when FOV is zoomed in. | clientdll archive per_user |
| ragdoll_impact_strength |  | developmentonly clientdll |
| g_debug_ragdoll_visualize |  | clientdll cheat |
| g_ragdoll_fadespeed |  | developmentonly clientdll |
| g_ragdoll_lvfadespeed |  | developmentonly clientdll |
| mat_colcorrection_disableentities | Disable map color-correction entities | developmentonly clientdll |
| mat_colcorrection_forceentitiesclientside | Forces color correction entities to be updated on the client | clientdll cheat |
| cl_retire_low_priority_lights | Low priority dlights are replaced by high priority ones | developmentonly clientdll |
| cl_globallight_freeze |  | developmentonly clientdll |
| cl_globallight_expansion |  | developmentonly clientdll |
| cl_globallight_debug |  | developmentonly clientdll |
| cl_globallight_shadow_mode |  | developmentonly clientdll |
| mat_slopescaledepthbias_shadowmap |  | developmentonly clientdll |
| cl_player_ping_mute | If 1, player pinging will make a sound, if 0, pings will be silent | clientdll archive release |
| cl_tracer_frequency_override | Override tracer frequency (-1 to disable) | developmentonly clientdll |
| cl_parachute_autodeploy | Auto-deploy parachute if fall speed exceeds lethal limit | clientdll archive userinfo per_user server_can_execute |
| cl_rappel_tilt |  | clientdll release |
| cl_disable_ragdolls |  | clientdll cheat |
| cl_ragdoll_reload |  | developmentonly clientdll |
| cl_ragdoll_default_scale |  | developmentonly clientdll |
| animated_material_attributes |  | clientdll cheat |
| cl_anim_queue_changes |  | developmentonly clientdll |
| cl_sequence_debug |  | developmentonly clientdll |
| cl_sequence_debug2 |  | developmentonly clientdll |
| cl_sequence_model_substring |  | developmentonly clientdll |
| r_show_ao_proxies |  | clientdll cheat |
| cl_cq_min_queue | Allows client to disable (=-1), defer to server (=0), or request a certain min-command queue size for games that support the command queue (IsUsingCommandQueue()) for CUserCmds. | clientdll userinfo cheat |
| cl_updaterate | Number of packets per second of updates you are requesting from the server | clientdll archive userinfo |
| cl_interp_ratio | Sets the interpolation amount (final amount is cl_interp_ratio / cl_updaterate). | clientdll userinfo |
| cl_interp | Sets the interpolation amount (bounded on low side by server interp ratio settings). | clientdll userinfo |
| cl_predict | Perform client side prediction. | clientdll userinfo cheat |
| mp_usehwmmodels | Enable the use of the hw morph models. (-1 = never, 1 = always, 0 = based upon GPU) | developmentonly clientdll |
| cl_ent_joint_axis_size |  | developmentonly clientdll |
| cl_ent_joint_names |  | developmentonly clientdll |
| cl_ent_joint_filter_substring |  | developmentonly clientdll |
| cl_ent_joint_use_bind_pose |  | developmentonly clientdll |
| cl_ent_joint_only_ik_joints |  | developmentonly clientdll |
| cl_ent_skeleton_only_ik_joints |  | developmentonly clientdll |
| cl_screenmessage_notifytime | How long to display screen message text | developmentonly clientdll |
| cl_ent_showonlyattachment |  | clientdll cheat |
| fov_cs_debug | Sets the view fov if cheats are on. | clientdll cheat |
| fov_cs_ultrawide_near_z |  | developmentonly clientdll cheat |
| cl_sniper_delay_unscope |  | clientdll archive release |
| death_chase_distance |  | developmentonly clientdll |
| cl_sanitize_player_names | Replace names of other players with something non-offensive. | clientdll archive |
| cl_sanitize_muted_players | Hide names and avatars of muted players. | clientdll release |
| cl_show_playernames_max_chars_console | Shows all player names (including bots) as 16 W's. | developmentonly clientdll |
| cl_teammate_color_1 |  | developmentonly clientdll |
| cl_teammate_color_2 |  | developmentonly clientdll |
| cl_teammate_color_3 |  | developmentonly clientdll |
| cl_teammate_color_4 |  | developmentonly clientdll |
| cl_teammate_color_5 |  | developmentonly clientdll |
| cl_teammate_colors_show | In competitive, 1 = show teammates as separate colors in the radar, scoreboard, etc., 2 = show colors and letters | clientdll archive release |
| cl_show_enemy_avatar_colors |  | developmentonly clientdll |
| option_speed_method | Input toggle control | clientdll archive userinfo per_user |
| cl_pred_checkstuck | Perform the additional 'stuck' traces on the client side during prediction. | developmentonly clientdll |
| spec_hide_players | Toggle the visibility of scoreboard players. | clientdll release clientcmd_can_execute |
| spec_dz_group_teams | If set, will group players into their teams for spectating, if 0, spectating numbers will be the default individual players | clientdll release |
| spec_usenumberkeys_nobinds | If set to 1, map voting and spectator view use the raw number keys instead of the weapon binds (slot1, slot2, etc). | clientdll archive |
| cl_obs_interp_enable | Enables interpolation between observer targets | clientdll archive |
| cl_obs_interp_pos_rate |  | clientdll archive |
| cl_obs_interp_pos_halflife |  | developmentonly clientdll |
| cl_obs_interp_snap_dist |  | developmentonly clientdll |
| cl_obs_interp_settle_dist |  | developmentonly clientdll |
| cl_obs_interp_dist_to_turn_to_face | Changing to a target further than this will cause the camera to face the direction of travel | developmentonly clientdll |
| cl_obs_interp_angle_progress_headstart |  | developmentonly clientdll |
| cl_obs_interp_turn_to_face_start_frac |  | developmentonly clientdll |
| cl_obs_interp_turn_to_face_end_frac |  | developmentonly clientdll |
| cl_obs_interp_obstruction_behavior |  | developmentonly clientdll |
| cl_spec_use_tournament_content_standards |  | clientdll release |
| viewmodel_offset_x | viewmodel_offset_x | clientdll archive |
| viewmodel_offset_y | viewmodel_offset_y | clientdll archive |
| viewmodel_offset_z | viewmodel_offset_z | clientdll archive |
| viewmodel_offset_randomize | randomly change viewmodel offsets to visualize range | clientdll cheat |
| viewmodel_always_on | Force the view model to draw, even when in 3rd person | clientdll cheat |
| cl_gunlowerangle |  | developmentonly clientdll |
| cl_gunlowerspeed |  | developmentonly clientdll |
| cl_mantle_gunloweramt |  | developmentonly clientdll |
| cl_mantle_gunlowerspeed |  | developmentonly clientdll |
| cl_death_anim_viewmodel_drop_rate |  | developmentonly clientdll |
| cl_death_anim_viewmodel_pitch_rate |  | developmentonly clientdll |
| cl_wpn_sway_interp |  | developmentonly clientdll |
| cl_wpn_sway_scale |  | clientdll cheat |
| cl_smoke_volumeprop |  | developmentonly clientdll |
| cl_smoke_volume_growth |  | developmentonly clientdll |
| cl_viewmodelsclonedasworld |  | developmentonly clientdll |
| cl_weapon_debug_print_accuracy |  | clientdll cheat release |
| cl_weapon_debug_show_accuracy | Draws a circle representing the effective range with every shot. | clientdll cheat release |
| cl_weapon_debug_show_accuracy_duration |  | clientdll cheat release |
| cl_wallbang_heavy_threshold | The Threshold where to switch from Light to Heavy Wallbang tracer | clientdll cheat release |
| weapon_skins |  | developmentonly clientdll |
| weapon_skins_for_bots |  | developmentonly clientdll |
| weapon_skins_on_default |  | developmentonly clientdll |
| weapon_random_stickers |  | developmentonly clientdll |
| weapon_all_stattrak |  | developmentonly clientdll |
| weapon_all_nametag |  | developmentonly clientdll |
| cl_cam_driver_compensation_scale |  | clientdll release |
| cl_sniper_auto_rezoom | Auto-rezoom snipers after a shot | clientdll archive userinfo per_user |
| cl_tablet_mapmode |  | clientdll archive release |
| econ_debug_loadout_ui | Show debug data when players change their loadout. | developmentonly clientdll |
| snd_music_selection | Tracking rotating music for players with no music packs equipped. | clientdll archive |
| cl_use_opens_buy_menu | Pressing the +use key will open the buy menu if in a buy zone (just as if you pressed the 'buy' key). | clientdll archive userinfo per_user |
| cl_silencer_mode | 0: cannot detach; 1: press secondary fire to detach | clientdll archive userinfo per_user |
| cl_autohelp | Auto-help | clientdll archive userinfo |
| closeonbuy | Set non-zero to close the buy menu after buying something | clientdll archive per_user |
| cl_join_advertise | Advertise joinable game in progress to Steam friends, otherwise need a Steam invite (2: all servers, 1: official servers, 0: none) | clientdll archive |
| composite_material_cache_count_max |  | developmentonly clientdll |
| r_replay_post_effect |  | clientdll cheat |
| leaderboards_cache_duration |  | developmentonly clientdll |
| cl_predictioncopy_runs |  | developmentonly clientdll |
| pwatchent | Entity to watch for prediction system changes. | clientdll cheat |
| pwatchvar | Entity variable to watch in prediction system for changes. | clientdll cheat |
| cl_pred_build_verbose | Verbose spew when building prediction optimized data runs. | developmentonly clientdll |
| dllverification_sendmessage |  | developmentonly clientdll |
| cl_panel_freeze_time_after_press | time to freeze mouse/pointer motion after a mouse button press | developmentonly clientdll |
| panorama_focus_world_panels | when set request key focus when a world panel is enabled | clientdll archive |
| panorama_async_compute_mipgen | use asynchronous compute for mipmap generation. | developmentonly clientdll |
| panorama_worldpanel_update_culling |  | developmentonly clientdll |
| panorama_worldpanel_update_cull_distance |  | developmentonly clientdll |
| panorama_worldpanel_update_cull_size_threshold |  | developmentonly clientdll |
| ui_hud_dist | distance from the player to the hud | developmentonly clientdll replicated |
| point_hint_ui_dpi |  | developmentonly clientdll replicated |
| point_hint_ui_width |  | developmentonly clientdll replicated |
| point_hint_ui_height |  | developmentonly clientdll replicated |
| point_hint_ui_large_width |  | developmentonly clientdll replicated |
| point_hint_ui_large_height |  | developmentonly clientdll replicated |
| cl_ent_pivot_size |  | clientdll archive cheat |
| cl_debug_overlay_fullposition |  | developmentonly clientdll |
| cl_ent_text_no_name_really_i_mean_it |  | clientdll cheat |
| cl_ent_show_contexts | Show entity contexts in ent_text display | clientdll cheat |
| cl_ent_text_flags_active |  | clientdll archive cheat |
| buildcubemaps_renderdoc_capture | Capture a specific cubemap with RenderDoc during buildcubemaps. | developmentonly clientdll |
| show_visibility_boxes | Enable or Disable debug display of visibility boxes | clientdll cheat |
| cl_skip_update_animations | Enable to skip game animations | developmentonly clientdll |
| cl_massreport |  | developmentonly clientdll |
| cl_lightquery_debug |  | clientdll cheat |
| cl_phys_enabled | Enable all physics simulation | clientdll cheat |
| cl_phys_stop_at_collision |  | clientdll cheat |
| cl_phys_sleep_enable | Enable sleeping for dynamic physics bodies. | clientdll cheat |
| cl_phys_animated_hierarchy |  | developmentonly clientdll |
| cl_phys_block_fraction |  | developmentonly clientdll |
| cl_phys_block_dist |  | developmentonly clientdll |
| cloth_sim_on_tick |  | developmentonly clientdll |
| cl_phys_timescale | Scale time for physics | developmentonly clientdll |
| cloth_update_bones_on_ticks |  | developmentonly clientdll |
| cl_phys_visualize_awake |  | developmentonly clientdll |
| phys_batch_ray_test |  | developmentonly clientdll |
| cl_phys_debug_callback_entities | Print all entities that get touch callbacks. Each entity is printed only once. | clientdll cheat |
| cl_hitbox_debug |  | developmentonly clientdll |
| r_strip_invisible_during_sceneobject_update |  | developmentonly clientdll |
| r_threaded_scene_object_update |  | developmentonly clientdll |
| r_freeze_sceneobjects |  | developmentonly clientdll |
| @panorama_early_anim_dispatch |  | developmentonly clientdll |
| cl_script_break_in_native_debugger_on_error |  | developmentonly clientdll |
| cl_script_attach_debugger_at_startup |  | developmentonly clientdll |
| spec_replay_review_sound | When set to non-0, a sound effect is played during Killer Replay | developmentonly clientdll |
| spec_replay_rate_slowdown | The part of Killer Replay right before death is played at this rate | developmentonly clientdll |
| spec_replay_rate_slowdown_length | The part of Killer Replay right before death is played at this rate | developmentonly clientdll |
| spec_replay_fadein | Amount of time in seconds it takes to visually fade into replay, or into real-time after replay | developmentonly clientdll |
| spec_replay_fadeout | Amount of time in seconds it takes to visually fade out of replay, or out of real-time before replay | developmentonly clientdll |
| spec_replay_sound_fadein | Amount of time in seconds it takes to fade in the audio before or after replay | developmentonly clientdll |
| spec_replay_sound_fadeout | Amount of time in seconds it takes to fade out the audio before or after replay | developmentonly clientdll |
| spec_replay_cache_ragdolls | when set to 0, ragdolls will settle dynamically before and after Killer Replay | developmentonly clientdll |
| spec_replay_others_experimental | Replay the last death of the round, if possible. Disabled on official servers by default. Experimental. | developmentonly clientdll |
| spec_replay_autostart | Auto-start Killer Replay when available | clientdll archive |
| spec_replay_victim_pov | Killer Replay - replay from victim's point of view (1); the default is killer's (0). Experimental. | developmentonly clientdll |
| mm_player_search_requests_limit | How many friend requests are displayed. | developmentonly |
| mm_player_search_update_interval | Interval between players searches. | developmentonly |
| mm_player_search_lan_ping_interval | Interval between LAN discovery pings. | developmentonly |
| mm_player_search_lan_ping_duration | Duration of LAN discovery ping phase. | developmentonly |
| mm_events_listeners_validation |  | developmentonly |
| net_allow_multicast |  | archive release |
| cl_names_debug |  | developmentonly |
| mm_player_search_count |  | developmentonly |
| mm_ignored_sessions_forget_time |  | developmentonly |
| mm_ignored_sessions_forget_pass |  | developmentonly |
| mm_server_search_update_interval | Interval between servers updates. | developmentonly |
| mm_server_search_inet_ping_interval | How long to wait between pinging internet server details. | developmentonly |
| mm_server_search_inet_ping_timeout | How long to wait for internet server details. | developmentonly |
| mm_server_search_inet_ping_window | How many servers can be pinged for server details in a batch. | developmentonly |
| mm_server_search_inet_ping_refresh | How often to refresh a listed server. | developmentonly |
| mm_server_search_server_lifetime | How long until a server is no longer returned by the master till we remove it. | developmentonly |
| mm_server_search_lan_ping_interval | Interval between LAN discovery pings. | developmentonly |
| mm_server_search_lan_ping_duration | Duration of LAN discovery ping phase. | developmentonly |
| mm_server_search_lan_ports | Ports to scan during LAN games discovery. Also used to discover and correctly connect to dedicated LAN servers behind NATs. | archive release |
| mm_datacenter_update_interval | Interval between datacenter stats updates. | developmentonly |
| mm_datacenter_retry_interval | Interval between datacenter stats retries. | developmentonly |
| mm_datacenter_query_delay | Delay after datacenter update is enabled before data is actually queried. | developmentonly |
| mm_session_sys_delay_create |  | developmentonly |
| mm_session_sys_delay_create_host |  | developmentonly |
| mm_session_sys_connect_timeout |  | developmentonly |
| mm_session_team_res_timeout |  | developmentonly |
| mm_session_voice_loading |  | developmentonly |
| mm_session_sys_ranking_timeout |  | developmentonly |
| mm_session_sys_slots_guaranteed |  | developmentonly |
| mm_session_sys_pkey |  | release |
| mm_session_sys_kick_ban_duration |  | release |
| voice_test_log_send |  | release |
| mm_dlcs_mask_fake |  | developmentonly |
| mm_dlcs_mask_extras |  | developmentonly |
| mm_tu_string |  | developmentonly |
| mm_dedicated_allow | 1 = allow searches for dedicated servers | developmentonly |
| mm_dedicated_fake | 1 = pretend like search is going, but abort after some time | developmentonly |
| mm_dedicated_force_servers | Comma delimited list of ip:port of servers used to search for dedicated servers instead of searching for public servers..Use syntax `publicip1:port\|privateip1:port,publicip2:port\|privateip2:port` if your server is behind NAT..If the server is behind NAT, you can specify `0.0.0.0\|privateip:port` and if server port is in the list of `mm_server_search_lan_ports` its public address should be automatically detected. | release |
| mm_dedicated_ip | IP address of dedicated servers to consider available | developmentonly |
| mm_dedicated_timeout_request |  | developmentonly |
| mm_dedicated_search_maxping | Longest preferred ping to dedicated servers for games | archive |
| mm_dedicated_search_maxresults |  | developmentonly |
| mm_teamsearch_errortime | Time team search is in error state until it self-cancels | developmentonly |
| mm_teamsearch_nostart | Team search will fake cancel before searching for server | developmentonly |
| sv_search_team_key | When initiating team search, set this key to match with known opponents team | release |
| mm_session_search_num_results |  | developmentonly |
| mm_session_search_qos_timeout |  | release |
| mm_match_search_update_interval | Interval between matchsearcher updates. | developmentonly |
| mm_sv_load_test |  | developmentonly |
| mm_title_debug_version | This matchmaking version will override .res file version for isolating matchmaking | developmentonly |
| mm_csgo_community_search_players_min | When performing CSGO community matchmaking look for servers with at least so many human players | archive release |
| diffcheck_playerslot |  | developmentonly |
| diffcheck_spew | Actually show diffcheck results. | developmentonly |
| diffcheck_spew_diff_only | Show diff only. | developmentonly |
| diffcheck_spew_diff_filter | Show diff with matching filter substring only. | developmentonly |
| diffcheck | Activate diffcheck system. | developmentonly |
| nav_gen_true | Always true | cheat |
| nav_gen_false | Always false | cheat |
| nav_gen_match_ground |  | cheat |
| nav_gen_opt_to_quads |  | cheat |
| nav_gen_opt_to_quads_angle_limit |  | cheat |
| nav_gen_opt_to_quads_planar_deviation_limit |  | cheat |
| nav_gen_opt_to_quads_num_steps |  | cheat |
| nav_gen_opt_to_quads_se_limit_start |  | cheat |
| nav_gen_opt_to_quads_se_limit_end |  | cheat |
| nav_gen_opt_to_quads_weld_limit_start |  | cheat |
| nav_gen_opt_to_quads_weld_limit_end |  | cheat |
| nav_gen_degen_limit |  | cheat |
| nav_gen_markup_split_tol_base |  | cheat |
| nav_gen_markup_split_tol_nonentity |  | cheat |
| nav_gen_markup_split_tol_nonav |  | cheat |
| nav_gen_markup_split_expand |  | cheat |
| nav_gen_max_edge_len_do_clip |  | cheat |
| nav_gen_max_edge_len |  | cheat |
| nav_gen_max_edge_len_split_tol |  | cheat |
| nav_gen_max_bottleneck_width_do_clip |  | cheat |
| nav_gen_max_bottleneck_width |  | cheat |
| nav_gen_island_removal |  | cheat |
| nav_gen_island_removal_all_hulls |  | cheat |
| nav_gen_tri_reduce_all |  | cheat |
| nav_gen_connect_dist_a |  | cheat |
| nav_gen_connect_dist_b |  | cheat |
| nav_gen_connect_dist_z_mult |  | cheat |
| nav_gen_connect_angle |  | cheat |
| nav_gen_connect_angle_ignore_z |  | cheat |
| nav_gen_connect_overlap |  | cheat |
| nav_gen_connect_allow_multiple |  | cheat |
| nav_gen_add_jumps |  | cheat |
| nav_gen_vertical_limit |  | cheat |
| nav_gen_remove_vertical_polys |  | cheat |
| nav_gen_split_boundary_polys |  | cheat |
| nav_gen_split_multi_connection_polys |  | cheat |
| nav_gen_split_multi_connection_polys_tol |  | cheat |
| nav_gen_clip_polys_to_clearance |  | cheat |
| nav_gen_clip_polys_to_clearance_debug |  | cheat |
| nav_gen_join_nonzup |  | cheat |
| nav_gen_agent_radius_buffer | Buffer to add to agent radius before passing to nav gen | cheat |
| nav_gen_jump_connection_min_overlap_ratio | Minimum edge overlap required for jump connection consideration as a percentage of agent radius | cheat |
| nav_gen_tr_max_acceptable_cost_1 |  | cheat |
| nav_gen_tr_max_acceptable_cost_2 |  | cheat |
| recast_partitioning | 0 = watershed, 1 = monotone, 2 = layers | replicated cheat |
| recast_mark_overhang | Enable/disable overhang detection | replicated cheat |
| tr_epsilon_t_junction |  | replicated cheat |
| tr_openedge_penalty |  | replicated cheat |
| tr_max_acceptable_edge_length |  | replicated cheat |
| tr_do_reduce |  | replicated cheat |
| nav_split_place_on_ground | If true, nav areas will be placed flush with the ground when split. | cheat |
| nav_max_vis_delta_list_length |  | cheat |
| nav_corner_adjust_adjacent | radius used to raise/lower corners in nearby areas when raising/lowering corners. | cheat |
| nav_show_potentially_visible | Show areas that are potentially visible from the current nav area | cheat |
| nav_validate | Level of validation for nav system.  Higher will be slower. | cheat |


</div>