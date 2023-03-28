---
sidebar_position: 5
---

# VScript API

## Class Methods

### CBaseEntity

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AddEffects | void AddEffects( int <em>nFlags</em> ) | Adds the render effect flag. |
| ApplyAbsVelocityImpulse | void ApplyAbsVelocityImpulse( Vector <em>vecImpulse</em> ) | Apply a Velocity Impulse |
| ApplyLocalAngularVelocityImpulse | void ApplyLocalAngularVelocityImpulse( Vector <em>angImpulse</em> ) | Apply an Ang Velocity Impulse |
| Attribute_GetFloatValue | float Attribute_GetFloatValue( string <em>pName</em>, float <em>flDefault</em> ) | Get float value for an entity attribute. |
| Attribute_GetIntValue | int Attribute_GetIntValue( string <em>pName</em>, int <em>nDefault</em> ) | Get int value for an entity attribute. |
| Attribute_SetFloatValue | void Attribute_SetFloatValue( string <em>pName</em>, float <em>flValue</em> ) | Set float value for an entity attribute. |
| Attribute_SetIntValue | void Attribute_SetIntValue( string <em>pName</em>, int <em>nValue</em> ) | Set int value for an entity attribute. |
| DeleteAttribute | void DeleteAttribute( string <em>pName</em> ) | Delete an entity attribute. |
| EmitSound | void EmitSound( string <em>soundname</em> ) | Plays a sound from this entity. |
| EmitSoundParams | void EmitSoundParams( string <em>soundname</em>, int <em>nPitch</em>, float <em>flVolume</em>, float <em>flDelay</em> ) | Plays/modifies a sound from this entity. changes sound if nPitch and/or flVol or flSoundTime is > 0. |
| EyeAngles | QAngle EyeAngles( ) | Get the qangles that this entity is looking at. |
| EyePosition | Vector EyePosition( ) | Get vector to eye position - absolute coords. |
| FirstMoveChild | handle FirstMoveChild( ) |     |
| FollowEntity | void FollowEntity( handle <em>hEnt</em>, bool <em>bBoneMerge</em> ) | hEntity to follow, bool bBoneMerge |
| FollowEntityMerge | void FollowEntityMerge( handle <em>hEnt</em>, string <em>pszBoneOrAttachName</em> ) | hEntity to follow, string BoneOrAttachName |
| GatherCriteria | void GatherCriteria( handle <em>hResult</em> ) | Returns a table containing the criteria that would be used for response queries on this entity. This is the same as the table that is passed to response rule script function callbacks. |
| GetAbsOrigin | Vector GetAbsOrigin( ) |     |
| GetAbsScale | float GetAbsScale( ) |     |
| GetAngles | QAngle GetAngles( ) |     |
| GetAnglesAsVector | Vector GetAnglesAsVector( ) | Get entity pitch, yaw, roll as a vector. |
| GetAngularVelocity | Vector GetAngularVelocity( ) | Get the local angular velocity - returns a vector of pitch,yaw,roll |
| GetBaseVelocity | Vector GetBaseVelocity( ) | Get Base? velocity. |
| GetBoundingMaxs | Vector GetBoundingMaxs( ) | Get a vector containing max bounds, centered on object. |
| GetBoundingMins | Vector GetBoundingMins( ) | Get a vector containing min bounds, centered on object. |
| GetBounds | table GetBounds( ) | Get a table containing the 'Mins' & 'Maxs' vector bounds, centered on object. |
| GetCenter | Vector GetCenter( ) | Get vector to center of object - absolute coords |
| GetChildren | handle GetChildren( ) | Get the entities parented to this entity. |
| GetContext | table GetContext( string <em>name</em> ) | Looks up a context and returns it if available. May return string, float, or null (if the context isn't found). |
| GetForwardVector | Vector GetForwardVector( ) | Get the forward vector of the entity. |
| GetHealth | int GetHealth( ) | Get the health of this entity. |
| GetLeftVector | Vector GetLeftVector( ) | Get the left vector of the entity. |
| GetLocalAngles | QAngle GetLocalAngles( ) | Get entity local pitch, yaw, roll as a QAngle |
| GetLocalAngularVelocity | QAngle GetLocalAngularVelocity( ) | Maybe local angvel |
| GetLocalOrigin | Vector GetLocalOrigin( ) | Get entity local origin as a Vector |
| GetLocalScale | float GetLocalScale( ) |     |
| GetLocalVelocity | Vector GetLocalVelocity( ) | Get Entity relative velocity. |
| GetMass | float GetMass( ) | Get the mass of an entity. (returns 0 if it doesn't have a physics object) |
| GetMaxHealth | int GetMaxHealth( ) | Get the maximum health of this entity. |
| GetModelName | string GetModelName( ) | Returns the name of the model. |
| GetMoveParent | handle GetMoveParent( ) | If in hierarchy, retrieves the entity's parent. |
| GetOrigin | Vector GetOrigin( ) |     |
| GetOwner | handle GetOwner( ) | Gets this entity's owner |
| GetOwnerEntity | handle GetOwnerEntity( ) | Get the owner entity, if there is one |
| GetRightVector | Vector GetRightVector( ) | Get the right vector of the entity. WARNING: This produces a left-handed coordinate system. Use GetLeftVector instead (which is aligned with the y axis of the entity). |
| GetRootMoveParent | handle GetRootMoveParent( ) | If in hierarchy, walks up the hierarchy to find the root parent. |
| GetSoundDuration | float GetSoundDuration( string <em>soundname</em>, string <em>actormodel</em> ) | Returns float duration of the sound. Takes soundname and optional actormodelname. |
| GetSpawnGroupHandle | int GetSpawnGroupHandle( ) | Returns the spawn group handle of this entity |
| GetTeam | int GetTeam( ) | Get the team number of this entity. |
| GetTeamNumber | int GetTeamNumber( ) | Get the team number of this entity. |
| GetUpVector | Vector GetUpVector( ) | Get the up vector of the entity. |
| GetVelocity | Vector GetVelocity( ) |     |
| HasAttribute | bool HasAttribute( string <em>pName</em> ) | See if an entity has a particular attribute. |
| IsAlive | bool IsAlive( ) | Is this entity alive? |
| IsNPC | bool IsNPC( ) | Is this entity an CAI_BaseNPC? |
| IsPlayerController | bool IsPlayerController( ) | Is this entity a player controller? |
| IsPlayerPawn | bool IsPlayerPawn( ) | Is this entity a player pawn? |
| Kill | void Kill( ) |     |
| NextMovePeer | handle NextMovePeer( ) |     |
| OverrideFriction | void OverrideFriction( float <em>duration</em>, float <em>friction</em> ) | Takes duration, value for a temporary override. |
| PrecacheScriptSound | void PrecacheScriptSound( string <em>soundname</em> ) | Precache a sound for later playing. |
| RemoveEffects | void RemoveEffects( int <em>nFlags</em> ) | Removes the render effect flag. |
| SetAbsAngles | void SetAbsAngles( float <em>fPitch</em>, float <em>fYaw</em>, float <em>fRoll</em> ) | Set entity pitch, yaw, roll by component. |
| SetAbsOrigin | void SetAbsOrigin( Vector <em>origin</em> ) |     |
| SetAbsScale | void SetAbsScale( float <em>flScale</em> ) |     |
| SetAngles | void SetAngles( float <em>fPitch</em>, float <em>fYaw</em>, float <em>fRoll</em> ) | Set entity pitch, yaw, roll by component. |
| SetAngularVelocity | void SetAngularVelocity( float <em>pitchVel</em>, float <em>yawVel</em>, float <em>rollVel</em> ) | Set the local angular velocity - takes float pitch,yaw,roll velocities |
| SetConstraint | void SetConstraint( Vector <em>vPos</em> ) | Set the position of the constraint. |
| SetContext | void SetContext( string <em>pName</em>, string <em>pValue</em>, float <em>duration</em> ) | Store any key/value pair in this entity's dialog contexts. Value must be a string. Will last for duration (set 0 to mean 'forever'). |
| SetContextNum | void SetContextNum( string <em>pName</em>, float <em>fValue</em>, float <em>duration</em> ) | Store any key/value pair in this entity's dialog contexts. Value must be a number (int or float). Will last for duration (set 0 to mean 'forever'). |
| SetContextThink | void SetContextThink( string <em>pszContextName</em>, handle <em>hThinkFunc</em>, float <em>flInterval</em> ) | Set a think function on this entity. |
| SetEntityName | void SetEntityName( string <em>pName</em> ) | Set the name of an entity. |
| SetForwardVector | void SetForwardVector( Vector <em>v</em> ) | Set the orientation of the entity to have this forward vector. |
| SetFriction | void SetFriction( float <em>flFriction</em> ) | Set PLAYER friction, ignored for objects. |
| SetGravity | void SetGravity( float <em>flGravity</em> ) | Set PLAYER gravity, ignored for objects. |
| SetHealth | void SetHealth( int <em>nHealth</em> ) | Set the health of this entity. |
| SetLocalAngles | void SetLocalAngles( float <em>fPitch</em>, float <em>fYaw</em>, float <em>fRoll</em> ) | Set entity local pitch, yaw, roll by component |
| SetLocalOrigin | void SetLocalOrigin( Vector <em>origin</em> ) | Set entity local origin from a Vector |
| SetLocalScale | void SetLocalScale( float <em>flScale</em> ) |     |
| SetMass | void SetMass( float <em>flMass</em> ) | Set the mass of an entity. (does nothing if it doesn't have a physics object) |
| SetMaxHealth | void SetMaxHealth( int <em>amt</em> ) | Set the maximum health of this entity. |
| SetOrigin | void SetOrigin( Vector <em>v</em> ) |     |
| SetOwner | void SetOwner( handle <em>pOwner</em> ) | Sets this entity's owner |
| SetParent | void SetParent( handle <em>hParent</em>, string <em>pAttachmentname</em> ) | Set the parent for this entity. |
| SetTeam | void SetTeam( int <em>iTeamNum</em> ) |     |
| SetVelocity | void SetVelocity( Vector <em>vecVelocity</em> ) |     |
| StopSound | void StopSound( string <em>soundname</em> ) | Stops a named sound playing from this entity. |
| TakeDamage | int TakeDamage( handle <em>hInfo</em> ) | Apply damage to this entity. Use CreateDamageInfo() to create a damageinfo object. |
| TransformPointEntityToWorld | Vector TransformPointEntityToWorld( Vector <em>vPoint</em> ) | Returns the input Vector transformed from entity to world space |
| TransformPointWorldToEntity | Vector TransformPointWorldToEntity( Vector <em>vPoint</em> ) | Returns the input Vector transformed from world to entity space |
| Trigger | void Trigger( ) | Fires off this entity's OnTrigger responses. |
| ValidatePrivateScriptScope | void ValidatePrivateScriptScope( ) | Validates the private script scope and creates it if one doesn't exist. |

### CBaseAnimGraph

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetGraphParameter | table GetGraphParameter( string <em>pszParam</em> ) | Get the value of the given animGraph parameter |
| SetGraphLookTarget | void SetGraphLookTarget( Vector <em>vValue</em> ) | Pass the desired look target in world space to the graph |
| SetGraphParameter | void SetGraphParameter( string <em>pszParam</em>, table <em>svArg</em> ) | Set the specific param value, type is inferred from the type in script |
| SetGraphParameterBool | void SetGraphParameterBool( string <em>szName</em>, bool <em>bValue</em> ) | Set the specific param on or off |
| SetGraphParameterEnum | void SetGraphParameterEnum( string <em>szName</em>, int <em>nValue</em> ) | Pass the enum (int) value to the specified param |
| SetGraphParameterFloat | void SetGraphParameterFloat( string <em>szName</em>, float <em>flValue</em> ) | Pass the float value to the specified param |
| SetGraphParameterInt | void SetGraphParameterInt( string <em>szName</em>, int <em>nValue</em> ) | Pass the int value to the specified param |
| SetGraphParameterVector | void SetGraphParameterVector( string <em>szName</em>, Vector <em>vValue</em> ) | Pass the vector value to the specified param in the graph |

### CBaseFlex

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetCurrentScene | handle GetCurrentScene( ) | Returns the instance of the oldest active scene entity (if any). |
| GetSceneByIndex | handle GetSceneByIndex( int <em>index</em> ) | Returns the instance of the scene entity at the specified index. |
| ScriptPlayScene | float ScriptPlayScene( string <em>pszScene</em>, float <em>flDelay</em> ) | Play specified vcd file |

### CBaseModelEntity

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetAttachmentAngles | Vector GetAttachmentAngles( int <em>iAttachment</em> ) | Get the attachment id's angles as a p,y,r vector. |
| GetAttachmentForward | Vector GetAttachmentForward( int <em>iAttachment</em> ) | Get the attachment id's forward vector. |
| GetAttachmentOrigin | Vector GetAttachmentOrigin( int <em>iAttachment</em> ) | Get the attachment id's origin vector. |
| GetMaterialGroupHash | unsigned GetMaterialGroupHash( ) | Get the material group hash of this entity. |
| GetMaterialGroupMask | uint64 GetMaterialGroupMask( ) | Get the mesh group mask of this entity. |
| GetModelScale | float GetModelScale( ) | Get scale of entity's model. |
| GetRenderAlpha | int GetRenderAlpha( ) | Get the alpha modulation of this entity. |
| GetRenderColor | Vector GetRenderColor( ) | Get the render color of the entity. |
| ScriptLookupAttachment | int ScriptLookupAttachment( string <em>pAttachmentName</em> ) | Get the named attachment id. |
| SetBodygroup | void SetBodygroup( int <em>iGroup</em>, int <em>iValue</em> ) | Sets a bodygroup. |
| SetBodygroupByName | void SetBodygroupByName( string <em>pName</em>, int <em>iValue</em> ) | Sets a bodygroup by name. |
| SetLightGroup | void SetLightGroup( string <em>pLightGroup</em> ) | Sets the light group of the entity. |
| SetMaterialGroup | void SetMaterialGroup( string <em>pMaterialGroup</em> ) | Set the material group of this entity. |
| SetMaterialGroupHash | void SetMaterialGroupHash( unsigned <em>nHash</em> ) | Set the material group hash of this entity. |
| SetMaterialGroupMask | void SetMaterialGroupMask( uint64 <em>nMeshGroupMask</em> ) | Set the mesh group mask of this entity. |
| SetModel | void SetModel( string <em>pModelName</em> ) |     |
| SetModelScale | void SetModelScale( float <em>flScale</em> ) | Set scale of entity's model. |
| SetRenderAlpha | void SetRenderAlpha( int <em>nAlpha</em> ) | Set the alpha modulation of this entity. |
| SetRenderColor | void SetRenderColor( int <em>r</em>, int <em>g</em>, int <em>b</em> ) | Sets the render color of the entity. |
| SetRenderMode | void SetRenderMode( int <em>nMode</em> ) | Sets the render mode of the entity. |
| SetSingleMeshGroup | void SetSingleMeshGroup( string <em>pMeshGroupName</em> ) | Set a single mesh group for this entity. |
| SetSize | void SetSize( Vector <em>mins</em>, Vector <em>maxs</em> ) |     |
| SetSkin | void SetSkin( int <em>iSkin</em> ) | Set skin (int). |

### CBasePlayerController

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetPawn | handle GetPawn( ) | Returns the pawn for this controller |

### CBasePlayerPawn

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetController | handle GetController( ) | Returns the controller for this pawn |
| GetEquippedWeapons | table GetEquippedWeapons( ) | Returns an array of all the equipped weapons |
| GetWeaponCount | int GetWeaponCount( ) | Gets the number of weapons currently equipped |
| IsNoclipping | bool IsNoclipping( ) | Returns true if the player is in noclip mode. |

### CBaseTrigger

| Function | Signature | Description |
| -------- | --------- | ----------- |
| Disable | void Disable( ) | Disable's the trigger |
| Enable | void Enable( ) | Enable the trigger |
| IsTouching | bool IsTouching( handle <em>hEnt</em> ) | Checks whether the passed entity is touching the trigger. |

### CBodyComponent

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AddImpulseAtPosition | void AddImpulseAtPosition( Vector <em>Vector_1</em>, Vector <em>Vector_2</em> ) | Apply an impulse at a worldspace position to the physics |
| AddVelocity | void AddVelocity( Vector <em>Vector_1</em>, Vector <em>Vector_2</em> ) | Add linear and angular velocity to the physics object |
| DetachFromParent | void DetachFromParent( ) | Detach from its parent |
| GetSequence | int GetSequence( ) | Returns the active sequence |
| IsAttachedToParent | bool IsAttachedToParent( ) | Is attached to parent |
| LookupSequence | int LookupSequence( string <em>string_1</em> ) | Returns a sequence id given a name |
| SequenceDuration | float SequenceDuration( string <em>string_1</em> ) | Returns the duration in seconds of the specified sequence |
| SetAngularVelocity | void SetAngularVelocity( Vector <em>Vector_1</em> ) |     |
| SetMaterialGroup | void SetMaterialGroup( utlstringtoken <em>utlstringtoken_1</em> ) |     |
| SetVelocity | void SetVelocity( Vector <em>Vector_1</em> ) |     |

### CCustomGameEventManager

| Function | Signature | Description |
| -------- | --------- | ----------- |
| RegisterListener | int RegisterListener( string <em>string_1</em>, handle <em>handle_2</em> ) | ( string EventName, func CallbackFunction ) - Register a callback to be called when a particular custom event arrives. Returns a listener ID that can be used to unregister later. |
| Send_ServerToAllClients | void Send_ServerToAllClients( string <em>string_1</em>, handle <em>handle_2</em> ) | ( string EventName, table EventData ) |
| Send_ServerToPlayer | void Send_ServerToPlayer( handle <em>handle_1</em>, string <em>string_2</em>, handle <em>handle_3</em> ) | ( Entity Player, string EventName, table EventData ) |
| Send_ServerToTeam | void Send_ServerToTeam( int <em>int_1</em>, string <em>string_2</em>, handle <em>handle_3</em> ) | ( int TeamNumber, string EventName, table EventData ) |
| UnregisterListener | void UnregisterListener( int <em>int_1</em> ) | ( int ListnerID ) - Unregister a specific listener |

### CDebugOverlayScriptHelper

| Function | Signature | Description |
| -------- | --------- | ----------- |
| Axis | void Axis( Vector <em>Vector_1</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_2</em>, float <em>float_3</em>, bool <em>bool_4</em>, float <em>float_5</em> ) | Draws an axis. Specify origin + orientation in world space. |
| Box | void Box( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a world-space axis-aligned box. Specify bounds in world space. |
| BoxAngles | void BoxAngles( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws an oriented box at the origin. Specify bounds in local space. |
| Capsule | void Capsule( Vector <em>Vector_1</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_2</em>, float <em>float_3</em>, float <em>float_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws a capsule. Specify base in world space. |
| Circle | void Circle( Vector <em>Vector_1</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_2</em>, float <em>float_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws a circle. Specify center in world space. |
| CircleScreenOriented | void CircleScreenOriented( Vector <em>Vector_1</em>, float <em>float_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a circle oriented to the screen. Specify center in world space. |
| Cone | void Cone( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, float <em>float_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws a wireframe cone. Specify endpoint and direction in world space. |
| Cross | void Cross( Vector <em>Vector_1</em>, float <em>float_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a screen-aligned cross. Specify origin in world space. |
| Cross3D | void Cross3D( Vector <em>Vector_1</em>, float <em>float_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a world-aligned cross. Specify origin in world space. |
| Cross3DOriented | void Cross3DOriented( Vector <em>Vector_1</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_2</em>, float <em>float_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws an oriented cross. Specify origin in world space. |
| DrawTickMarkedLine | void DrawTickMarkedLine( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws a dashed line. Specify endpoints in world space. |
| EntityAttachments | void EntityAttachments( ehandle <em>ehandle_1</em>, float <em>float_2</em>, float <em>float_3</em> ) | Draws the attachments of the entity |
| EntityAxis | void EntityAxis( ehandle <em>ehandle_1</em>, float <em>float_2</em>, bool <em>bool_3</em>, float <em>float_4</em> ) | Draws the axis of the entity origin |
| EntityBounds | void EntityBounds( ehandle <em>ehandle_1</em>, int <em>int_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, bool <em>bool_6</em>, float <em>float_7</em> ) | Draws bounds of an entity |
| EntitySkeleton | void EntitySkeleton( ehandle <em>ehandle_1</em>, float <em>float_2</em> ) | Draws the skeleton of the entity |
| EntityText | void EntityText( ehandle <em>ehandle_1</em>, int <em>int_2</em>, string <em>string_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, float <em>float_8</em> ) | Draws text on an entity |
| FilledRect2D | void FilledRect2D( Vector2D <em>Vector2D_1</em>, Vector2D <em>Vector2D_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, float <em>float_7</em> ) | Draws a screen-space filled 2D rectangle. Coordinates are in pixels. |
| HorzArrow | void HorzArrow( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws a horizontal arrow. Specify endpoints in world space. |
| Line | void Line( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a line between two points |
| Line2D | void Line2D( Vector2D <em>Vector2D_1</em>, Vector2D <em>Vector2D_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, float <em>float_7</em> ) | Draws a line between two points in screenspace |
| PopDebugOverlayScope | void PopDebugOverlayScope( ) | Pops the identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch. |
| PushAndClearDebugOverlayScope | void PushAndClearDebugOverlayScope( utlstringtoken <em>utlstringtoken_1</em> ) | Pushes an identifier used to group overlays. Deletes all existing overlays using this overlay id. |
| PushDebugOverlayScope | void PushDebugOverlayScope( utlstringtoken <em>utlstringtoken_1</em> ) | Pushes an identifier used to group overlays. Overlays marked with this identifier can be deleted in a big batch. |
| RemoveAllInScope | void RemoveAllInScope( utlstringtoken <em>utlstringtoken_1</em> ) | Removes all overlays marked with a specific identifier, regardless of their lifetime. |
| SolidCone | void SolidCone( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, float <em>float_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws a solid cone. Specify endpoint and direction in world space. |
| Sphere | void Sphere( Vector <em>Vector_1</em>, float <em>float_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, bool <em>bool_7</em>, float <em>float_8</em> ) | Draws a wireframe sphere. Specify center in world space. |
| SweptBox | void SweptBox( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, Vector <em>Vector_4</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, int <em>int_9</em>, float <em>float_10</em> ) | Draws a swept box. Specify endpoints in world space and the bounds in local space. |
| Text | void Text( Vector <em>Vector_1</em>, int <em>int_2</em>, string <em>string_3</em>, float <em>float_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, float <em>float_9</em> ) | Draws 2D text. Specify origin in world space. |
| Texture | void Texture( string <em>string_1</em>, Vector2D <em>Vector2D_2</em>, Vector2D <em>Vector2D_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, Vector2D <em>Vector2D_8</em>, Vector2D <em>Vector2D_9</em>, float <em>float_10</em> ) | Draws a screen-space texture. Coordinates are in pixels. |
| Triangle | void Triangle( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws a filled triangle. Specify vertices in world space. |
| VectorText3D | void VectorText3D( Vector <em>Vector_1</em>, &lt;unknown&gt; <em>&lt;unknown&gt;_2</em>, string <em>string_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws 3D text. Specify origin + orientation in world space. |
| VertArrow | void VertArrow( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, bool <em>bool_8</em>, float <em>float_9</em> ) | Draws a vertical arrow. Specify endpoints in world space. |
| YawArrow | void YawArrow( Vector <em>Vector_1</em>, float <em>float_2</em>, float <em>float_3</em>, float <em>float_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, bool <em>bool_9</em>, float <em>float_10</em> ) | Draws a arrow associated with a specific yaw. Specify endpoints in world space. |

### CEntities

| Function | Signature | Description |
| -------- | --------- | ----------- |
| CreateByClassname | handle CreateByClassname( string <em>string_1</em> ) | Creates an entity by classname |
| FindAllByClassname | table FindAllByClassname( string <em>string_1</em> ) | Finds all entities by class name. Returns an array containing all the found entities. |
| FindAllByClassnameWithin | table FindAllByClassnameWithin( string <em>string_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Find entities by class name within a radius. |
| FindAllByModel | table FindAllByModel( string <em>string_1</em> ) | Find entities by model name. |
| FindAllByName | table FindAllByName( string <em>string_1</em> ) | Find all entities by name. Returns an array containing all the found entities in it. |
| FindAllByNameWithin | table FindAllByNameWithin( string <em>string_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Find entities by name within a radius. |
| FindAllByTarget | table FindAllByTarget( string <em>string_1</em> ) | Find entities by targetname. |
| FindAllInSphere | table FindAllInSphere( Vector <em>Vector_1</em>, float <em>float_2</em> ) | Find entities within a radius. |
| FindByClassname | handle FindByClassname( handle <em>handle_1</em>, string <em>string_2</em> ) | Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByClassnameNearest | handle FindByClassnameNearest( string <em>string_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Find entities by class name nearest to a point. |
| FindByClassnameWithin | handle FindByClassnameWithin( handle <em>handle_1</em>, string <em>string_2</em>, Vector <em>Vector_3</em>, float <em>float_4</em> ) | Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByModel | handle FindByModel( handle <em>handle_1</em>, string <em>string_2</em> ) | Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByModelWithin | handle FindByModelWithin( handle <em>handle_1</em>, string <em>string_2</em>, Vector <em>Vector_3</em>, float <em>float_4</em> ) | Find entities by model name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByName | handle FindByName( handle <em>handle_1</em>, string <em>string_2</em> ) | Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByNameNearest | handle FindByNameNearest( string <em>string_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Find entities by name nearest to a point. |
| FindByNameWithin | handle FindByNameWithin( handle <em>handle_1</em>, string <em>string_2</em>, Vector <em>Vector_3</em>, float <em>float_4</em> ) | Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindByTarget | handle FindByTarget( handle <em>handle_1</em>, string <em>string_2</em> ) | Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| FindInSphere | handle FindInSphere( handle <em>handle_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search |
| First | handle First( ) | Begin an iteration over the list of entities |
| GetLocalPlayerController | handle GetLocalPlayerController( ) | Get the local player controller. |
| GetLocalPlayerPawn | handle GetLocalPlayerPawn( ) | Get the local player pawn. |
| Next | handle Next( handle <em>handle_1</em> ) | Continue an iteration over the list of entities, providing reference to a previously found entity |

### CEntityInstance

| Function | Signature | Description |
| -------- | --------- | ----------- |
| ConnectOutput | void ConnectOutput( string <em>string_1</em>, string <em>string_2</em> ) | Adds an I/O connection that will call the named function on this entity when the specified output fires. |
| Destroy | void Destroy( ) |     |
| DisconnectOutput | void DisconnectOutput( string <em>string_1</em>, string <em>string_2</em> ) | Removes a connected script function from an I/O event on this entity. |
| DisconnectRedirectedOutput | void DisconnectRedirectedOutput( string <em>string_1</em>, string <em>string_2</em>, handle <em>handle_3</em> ) | Removes a connected script function from an I/O event on the passed entity. |
| FireOutput | void FireOutput( string <em>string_1</em>, handle <em>handle_2</em>, handle <em>handle_3</em>, table <em>table_4</em>, float <em>float_5</em> ) | Fire an entity output |
| GetClassname | string GetClassname( ) |     |
| GetDebugName | string GetDebugName( ) | Get the entity name w/help if not defined (i.e. classname/etc) |
| GetEntityHandle | ehandle GetEntityHandle( ) | Get the entity as an EHANDLE |
| GetEntityIndex | int GetEntityIndex( ) |     |
| GetIntAttr | int GetIntAttr( string <em>string_1</em> ) | Get Integer Attribute |
| GetName | string GetName( ) |     |
| GetOrCreatePrivateScriptScope | handle GetOrCreatePrivateScriptScope( ) | Retrieve, creating if necessary, the private per-instance script-side data associated with an entity |
| GetOrCreatePublicScriptScope | handle GetOrCreatePublicScriptScope( ) | Retrieve, creating if necessary, the public script-side data associated with an entity |
| GetPrivateScriptScope | handle GetPrivateScriptScope( ) | Retrieve the private per-instance script-side data associated with an entity |
| GetPublicScriptScope | handle GetPublicScriptScope( ) | Retrieve the public script-side data associated with an entity |
| RedirectOutput | void RedirectOutput( string <em>string_1</em>, string <em>string_2</em>, handle <em>handle_3</em> ) | Adds an I/O connection that will call the named function on the passed entity when the specified output fires. |
| RemoveSelf | void RemoveSelf( ) | Delete this entity |
| SetIntAttr | void SetIntAttr( string <em>string_1</em>, int <em>int_2</em> ) | Set Integer Attribute |
| entindex | int entindex( ) |     |

### CEnvEntityMaker

| Function | Signature | Description |
| -------- | --------- | ----------- |
| SpawnEntity | void SpawnEntity( ) | Create an entity at the location of the maker |
| SpawnEntityAtEntityOrigin | void SpawnEntityAtEntityOrigin( handle <em>hEntity</em> ) | Create an entity at the location of a specified entity instance |
| SpawnEntityAtLocation | void SpawnEntityAtLocation( Vector <em>vecAlternateOrigin</em>, Vector <em>vecAlternateAngles</em> ) | Create an entity at a specified location and orientaton, orientation is Euler angle in degrees (pitch, yaw, roll) |
| SpawnEntityAtNamedEntityOrigin | void SpawnEntityAtNamedEntityOrigin( string <em>pszName</em> ) | Create an entity at the location of a named entity |

### CEnvProjectedTexture

| Function | Signature | Description |
| -------- | --------- | ----------- |
| SetFarRange | void SetFarRange( float <em>flRange</em> ) | Set light maximum range |
| SetLinearAttenuation | void SetLinearAttenuation( float <em>flAtten</em> ) | Set light linear attenuation value |
| SetNearRange | void SetNearRange( float <em>flRange</em> ) | Set light minimum range |
| SetQuadraticAttenuation | void SetQuadraticAttenuation( float <em>flAtten</em> ) | Set light quadratic attenuation value |
| SetVolumetrics | void SetVolumetrics( bool <em>bOn</em>, float <em>flIntensity</em>, float <em>flNoise</em>, int <em>nPlanes</em>, float <em>flPlaneOffset</em> ) | Turn on/off light volumetrics: bool bOn, float flIntensity, float flNoise, int nPlanes, float flPlaneOffset |

### CHostage

| Function | Signature | Description |
| -------- | --------- | ----------- |
| IsBeingCarried | bool IsBeingCarried( ) | Get whether the hostage is currently being carried or not |

### CInfoData

| Function | Signature | Description |
| -------- | --------- | ----------- |
| QueryColor | Vector QueryColor( utlstringtoken <em>tok</em>, Vector <em>vDefault</em> ) | Query color data for this key |
| QueryFloat | float QueryFloat( utlstringtoken <em>tok</em>, float <em>flDefault</em> ) | Query float data for this key |
| QueryInt | int QueryInt( utlstringtoken <em>tok</em>, int <em>nDefault</em> ) | Query int data for this key |
| QueryNumber | float QueryNumber( utlstringtoken <em>tok</em>, float <em>flDefault</em> ) | Query number data for this key |
| QueryString | string QueryString( utlstringtoken <em>tok</em>, string <em>pDefault</em> ) | Query string data for this key |
| QueryVector | Vector QueryVector( utlstringtoken <em>tok</em>, Vector <em>vDefault</em> ) | Query vector data for this key |

### CInfoWorldLayer

| Function | Signature | Description |
| -------- | --------- | ----------- |
| HideWorldLayer | void HideWorldLayer( ) | Hides this layer |
| ShowWorldLayer | void ShowWorldLayer( ) | Shows this layer |

### CLogicRelay

| Function | Signature | Description |
| -------- | --------- | ----------- |
| Trigger | void Trigger( handle <em>hActivator</em>, handle <em>hCaller</em> ) | Triggers the logic_relay |

### CMarkupVolumeTagged

| Function | Signature | Description |
| -------- | --------- | ----------- |
| HasTag | bool HasTag( string <em>pszTagName</em> ) | Does this volume have the given tag. |

### CNativeOutputs

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AddOutput | void AddOutput( string <em>string_1</em>, string <em>string_2</em> ) | Add an output |
| Init | void Init( int <em>int_1</em> ) | Initialize with number of outputs |

### CPhysicsProp

| Function | Signature | Description |
| -------- | --------- | ----------- |
| DisableMotion | void DisableMotion( ) | Disable motion for the prop |
| EnableMotion | void EnableMotion( ) | Enable motion for the prop |
| SetDynamicVsDynamicContinuous | void SetDynamicVsDynamicContinuous( bool <em>bIsDynamicVsDynamicContinuousEnabled</em> ) | Enable/disable dynamic vs dynamic continuous collision traces |

### CPointClientUIWorldPanel

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AcceptUserInput | void AcceptUserInput( ) | Tells the panel to accept user input. |
| AddCSSClasses | void AddCSSClasses( string <em>pszClasses</em> ) | Adds CSS class(es) to the panel |
| IgnoreUserInput | void IgnoreUserInput( ) | Tells the panel to ignore user input. |
| IsGrabbable | bool IsGrabbable( ) | Returns whether this entity is grabbable. |
| RemoveCSSClasses | void RemoveCSSClasses( string <em>pszClasses</em> ) | Remove CSS class(es) from the panel |

### CPointTemplate

| Function | Signature | Description |
| -------- | --------- | ----------- |
| DeleteCreatedSpawnGroups | void DeleteCreatedSpawnGroups( ) | Deletes any spawn groups that this point_template has spawned. Note: The point_template will not be deleted by this. |
| ForceSpawn | void ForceSpawn( ) | Spawns all of the entities the point_template is pointing at. |
| GetSpawnedEntities | handle GetSpawnedEntities( ) | Get the list of the most recent spawned entities |
| SetSpawnCallback | void SetSpawnCallback( handle <em>hCallbackFunc</em>, handle <em>hCallbackScope</em> ) | SetSpawnCallback( hCallbackFunc, hCallbackScope, hCallbackData ) : Set a callback for when the template spawns entities. The spawned entities will be passed in as an array. |

### CPointWorldText

| Function | Signature | Description |
| -------- | --------- | ----------- |
| SetMessage | void SetMessage( string <em>pMessage</em> ) | Set the message on this entity. |

### CSceneEntity

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AddBroadcastTeamTarget | void AddBroadcastTeamTarget( int <em>int_1</em> ) | Adds a team (by index) to the broadcast list |
| Cancel | void Cancel( ) | Cancel scene playback |
| EstimateLength | float EstimateLength( ) | Returns length of this scene in seconds. |
| FindCamera | handle FindCamera( ) | Get the camera |
| FindNamedEntity | handle FindNamedEntity( string <em>string_1</em> ) | given an entity reference, such as !target, get actual entity from scene object |
| IsPaused | bool IsPaused( ) | If this scene is currently paused. |
| IsPlayingBack | bool IsPlayingBack( ) | If this scene is currently playing. |
| LoadSceneFromString | bool LoadSceneFromString( string <em>string_1</em>, string <em>string_2</em> ) | Given a dummy scene name and a vcd string, load the scene |
| RemoveBroadcastTeamTarget | void RemoveBroadcastTeamTarget( int <em>int_1</em> ) | Removes a team (by index) from the broadcast list |
| Start | void Start( handle <em>handle_1</em> ) | Start scene playback, takes activatorEntity as param |

### CScriptKeyValues

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetValue | table GetValue( string <em>string_1</em> ) | Reads a spawn key |

### CScriptParticleManager

| Function | Signature | Description |
| -------- | --------- | ----------- |
| CreateParticle | int CreateParticle( string <em>string_1</em>, int <em>int_2</em>, handle <em>handle_3</em> ) | Creates a new particle effect |
| CreateParticleForPlayer | int CreateParticleForPlayer( string <em>string_1</em>, int <em>int_2</em>, handle <em>handle_3</em>, handle <em>handle_4</em> ) | Creates a new particle effect that only plays for the specified player |
| DestroyParticle | void DestroyParticle( int <em>omdex</em>, bool <em>bDestroyImmediately</em> ) | Destroy a particle, if bDestroyImmediately destroy it without playing end caps. |
| GetParticleReplacement | string GetParticleReplacement( string <em>string_1</em>, handle <em>handle_2</em> ) |     |
| ReleaseParticleIndex | void ReleaseParticleIndex( int <em>int_1</em> ) | Frees the specified particle index |
| SetParticleAlwaysSimulate | void SetParticleAlwaysSimulate( int <em>int_1</em> ) |     |
| SetParticleControl | void SetParticleControl( int <em>int_1</em>, int <em>int_2</em>, Vector <em>Vector_3</em> ) | Set the control point data for a control on a particle effect |
| SetParticleControlEnt | void SetParticleControlEnt( int <em>int_1</em>, int <em>int_2</em>, handle <em>handle_3</em>, int <em>int_4</em>, string <em>string_5</em>, Vector <em>Vector_6</em>, bool <em>bool_7</em> ) |     |
| SetParticleControlOffset | void SetParticleControlOffset( int <em>iIndex</em>, int <em>iPoint</em>, Vector <em>vecOffset</em> ) | Set the linear offset for a control on a particle effect |
| SetParticleControlTransform | void SetParticleControlTransform( int <em>iIndex</em>, int <em>iPoint</em>, Vector <em>vOrigin</em>, QAngle <em>qAngles</em> ) | Set the transform for a control on a particle effect |
| SetParticleControlTransformForward | void SetParticleControlTransformForward( int <em>iIndex</em>, int <em>iPoint</em>, Vector <em>vOrigin</em>, Vector <em>vecForward</em> ) | Set the origin and forward direction for a control on a particle effect |

### CScriptPrecacheContext

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AddResource | void AddResource( string <em>string_1</em> ) | Precaches a specific resource |
| GetValue | table GetValue( string <em>string_1</em> ) | Reads a spawn key |

### Convars

| Function | Signature | Description |
| -------- | --------- | ----------- |
| GetBool | table GetBool( string <em>name</em> ) | Returns the convar as a boolean flag. |
| GetCommandClient | handle GetCommandClient( ) | Returns the player who issued this console command. |
| GetFloat | table GetFloat( string <em>name</em> ) | Returns the convar as a float. May return null if no such convar. |
| GetInt | table GetInt( string <em>name</em> ) | Returns the convar as an int. May return null if no such convar. |
| GetStr | table GetStr( string <em>name</em> ) | Returns the convar as a string. May return null if no such convar. |
| RegisterCommand | void RegisterCommand( string <em>name</em>, handle <em>fn</em>, string <em>helpString</em>, int <em>flags</em> ) | Register a console command. |
| RegisterConvar | void RegisterConvar( string <em>name</em>, string <em>defaultValue</em>, string <em>helpString</em>, int <em>flags</em> ) | Register a new console variable. |
| SetBool | void SetBool( string <em>name</em>, bool <em>val</em> ) | Sets the value of the convar to the bool. |
| SetFloat | void SetFloat( string <em>name</em>, float <em>val</em> ) | Sets the value of the convar to the float. |
| SetInt | void SetInt( string <em>name</em>, int <em>val</em> ) | Sets the value of the convar to the int. |
| SetStr | void SetStr( string <em>name</em>, string <em>val</em> ) | Sets the value of the convar to the string. |

### GlobalSys

| Function | Signature | Description |
| -------- | --------- | ----------- |
| CommandLineCheck | table CommandLineCheck( string <em>name</em> ) | Returns true if the command line param was used, otherwise false. |
| CommandLineFloat | table CommandLineFloat( string <em>name</em>, float <em>float_2</em> ) | Returns the command line param as a float. |
| CommandLineInt | table CommandLineInt( string <em>name</em>, int <em>int_2</em> ) | Returns the command line param as an int. |
| CommandLineStr | table CommandLineStr( string <em>name</em>, string <em>string_2</em> ) | Returns the command line param as a string. |

### SteamInfo

| Function | Signature | Description |
| -------- | --------- | ----------- |
| IsPublicUniverse | bool IsPublicUniverse( ) | Is the script connected to the public Steam universe |

## Global Functions


### Debug

| Function | Signature | Description |
| -------- | --------- | ----------- |
| DebugBreak | void DebugBreak( ) | Breaks in the debugger |
| DebugDrawBox | void DebugDrawBox( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, float <em>float_8</em> ) | Draw a debug overlay box (origin, mins, maxs, forward, r, g, b, a, duration ) |
| DebugDrawBoxDirection | void DebugDrawBoxDirection( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, Vector <em>Vector_4</em>, Vector <em>Vector_5</em>, float <em>float_6</em>, float <em>float_7</em> ) | Draw a debug forward box (cent, min, max, forward, vRgb, a, duration) |
| DebugDrawCircle | void DebugDrawCircle( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, float <em>float_4</em>, bool <em>bool_5</em>, float <em>float_6</em> ) | Draw a debug circle (center, vRgb, a, rad, ztest, duration) |
| DebugDrawClear | void DebugDrawClear( ) | Try to clear all the debug overlay info |
| DebugDrawLine | void DebugDrawLine( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, bool <em>bool_6</em>, float <em>float_7</em> ) | Draw a debug overlay line (origin, target, r, g, b, ztest, duration) |
| DebugDrawLine_vCol | void DebugDrawLine_vCol( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em>, bool <em>bool_4</em>, float <em>float_5</em> ) | Draw a debug line using color vec (start, end, vRgb, a, ztest, duration) |
| DebugDrawScreenTextLine | void DebugDrawScreenTextLine( float <em>float_1</em>, float <em>float_2</em>, int <em>int_3</em>, string <em>string_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, float <em>float_9</em> ) | Draw text with a line offset (x, y, lineOffset, text, r, g, b, a, duration) |
| DebugDrawSphere | void DebugDrawSphere( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em>, float <em>float_4</em>, bool <em>bool_5</em>, float <em>float_6</em> ) | Draw a debug sphere (center, vRgb, a, rad, ztest, duration) |
| DebugDrawText | void DebugDrawText( Vector <em>Vector_1</em>, string <em>string_2</em>, bool <em>bool_3</em>, float <em>float_4</em> ) | Draw text in 3d (origin, text, bViewCheck, duration) |
| DebugScreenTextPretty | void DebugScreenTextPretty( float <em>float_1</em>, float <em>float_2</em>, int <em>int_3</em>, string <em>string_4</em>, int <em>int_5</em>, int <em>int_6</em>, int <em>int_7</em>, int <em>int_8</em>, float <em>float_9</em>, string <em>string_10</em>, int <em>int_11</em>, bool <em>bool_12</em> ) | Draw pretty debug text (x, y, lineOffset, text, r, g, b, a, duration, font, size, bBold) |
| DoScriptAssert | void DoScriptAssert( bool <em>bool_1</em>, string <em>string_2</em> ) | #ScriptAssert:Asserts the passed in value. Prints out a message and brings up the assert dialog. |

### Printing

| Function | Signature | Description |
| -------- | --------- | ----------- |
| Msg | void Msg( string <em>string_1</em> ) | Print a message |
| PrintLinkedConsoleMessage | void PrintLinkedConsoleMessage( string <em>string_1</em>, string <em>string_2</em> ) | Print a console message with a linked console command |
| Say | void Say( handle <em>handle_1</em>, string <em>string_2</em>, bool <em>bool_3</em> ) | Have Entity say string, and teamOnly or not |
| ScriptPrintMessageCenterAll | void ScriptPrintMessageCenterAll( string <em>string_1</em> ) | Prints an alert message in the center print method to all players. |
| ScriptPrintMessageCenterAllWithParams | void ScriptPrintMessageCenterAllWithParams( string <em>string_1</em>, string <em>string_2</em>, string <em>string_3</em>, string <em>string_4</em> ) | Prints an alert message in the center print method to all players. Needs to pass token/message. param1, param2, param3. Can pass null if you need less than 3. |
| ScriptPrintMessageCenterTeam | void ScriptPrintMessageCenterTeam( int <em>int_1</em>, string <em>string_2</em> ) | Prints an alert message in the center print method to the specified team. |
| ScriptPrintMessageChatAll | void ScriptPrintMessageChatAll( string <em>string_1</em> ) | Prints a message in chat to all players. |
| ScriptPrintMessageChatTeam | void ScriptPrintMessageChatTeam( int <em>int_1</em>, string <em>string_2</em> ) | Prints a message in chat to the specified team. |
| ShowMessage | void ShowMessage( string <em>string_1</em> ) | Print a hud message on all clients |
| UTIL_MessageText | void UTIL_MessageText( int <em>int_1</em>, string <em>string_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em> ) | Sends colored text to one client. |
| UTIL_MessageTextAll | void UTIL_MessageTextAll( string <em>string_1</em>, int <em>int_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em> ) | Sends colored text to all clients. |
| UTIL_MessageTextAll_WithContext | void UTIL_MessageTextAll_WithContext( string <em>string_1</em>, int <em>int_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, handle <em>handle_6</em> ) | Sends colored text to all clients. (Valid context keys: player_id, value, team_id) |
| UTIL_MessageText_WithContext | void UTIL_MessageText_WithContext( int <em>int_1</em>, string <em>string_2</em>, int <em>int_3</em>, int <em>int_4</em>, int <em>int_5</em>, int <em>int_6</em>, handle <em>handle_7</em> ) | Sends colored text to one client. (Valid context keys: player_id, value, team_id) |
| UTIL_ResetMessageText | void UTIL_ResetMessageText( int <em>int_1</em> ) | Clear all message text on one client. |
| UTIL_ResetMessageTextAll | void UTIL_ResetMessageTextAll( ) | Clear all message text from all clients. |
| Warning | void Warning( string <em>string_1</em> ) | Print a warning |

### Training Course

| Function | Signature | Description |
| -------- | --------- | ----------- |
| ScriptGetBestTrainingCourseTime | int ScriptGetBestTrainingCourseTime( ) | Gets the player's best time for completing the timed course. |
| ScriptGetPlayerCompletedTraining | bool ScriptGetPlayerCompletedTraining( ) | Returns true if the player has completed the initial portion of the training map. |
| ScriptGetValveTrainingCourseTime | int ScriptGetValveTrainingCourseTime( ) | Gets Valve's best time for completing the timed course. |
| ScriptHighlightAmmoCounter | void ScriptHighlightAmmoCounter( ) | Sends an event that is just used by the instructor system to show a hint highlighting the ammo counter. |
| ScriptSetBestTrainingCourseTime | void ScriptSetBestTrainingCourseTime( int <em>int_1</em> ) | Sets the player's best time for completing the timed course. |
| ScriptSetMiniScoreHidden | void ScriptSetMiniScoreHidden( bool <em>bool_1</em> ) | Toggles the visibility of the miniscoreboard hud element. |
| ScriptSetPlayerCompletedTraining | void ScriptSetPlayerCompletedTraining( bool <em>bool_1</em> ) | Sets whether the player has completed the initial portion of the training map. |
| ScriptSetRadarHidden | void ScriptSetRadarHidden( bool <em>bool_1</em> ) | Toggles the visibility of the radar hud element. |
| ScriptShowExitDoorMsg | void ScriptShowExitDoorMsg( ) | Shows a message box in trainign when the player exits through the exit door |
| ScriptShowFinishMsgBox | void ScriptShowFinishMsgBox( ) | Shows a message box to let players know what to do next after finishing the training course. |
| ScriptTrainingGivePlayerAmmo | void ScriptTrainingGivePlayerAmmo( ) | Refills ammo to max for all weapons the player has (only works in training). |

### Co-op Strike

| Function | Signature | Description |
| -------- | --------- | ----------- |
| ScriptCoopCollectBonusCoin | void ScriptCoopCollectBonusCoin( ) | Marks one of the bonus coins as collected. |
| ScriptCoopExtendRoundDurationTime | void ScriptCoopExtendRoundDurationTime( float <em>float_1</em> ) | Extends the round time after checkpoint during the mission. |
| ScriptCoopGiveC4sToCTs | void ScriptCoopGiveC4sToCTs( int <em>int_1</em> ) | Will give the number of specified C4s to all alive CT players. |
| ScriptCoopMissionGetMissionNumber | int ScriptCoopMissionGetMissionNumber( ) | Gets the mission number for the current map - maps can have multiple missions on them. |
| ScriptCoopMissionRespawnDeadPlayers | void ScriptCoopMissionRespawnDeadPlayers( ) | Respawns players only. |
| ScriptCoopMissionSetDeadPlayerRespawnEnabled | void ScriptCoopMissionSetDeadPlayerRespawnEnabled( bool <em>bool_1</em> ) | Controls whether player respawns can happen. |
| ScriptCoopMissionSetNextRespawnIn | void ScriptCoopMissionSetNextRespawnIn( float <em>float_1</em>, bool <em>bool_2</em> ) | Set the next respawn wave to happen in this many seconds. |
| ScriptCoopMissionSpawnFirstEnemies | void ScriptCoopMissionSpawnFirstEnemies( int <em>int_1</em> ) | Spawns the first wave of enemies in coop. |
| ScriptCoopMissionSpawnNextWave | void ScriptCoopMissionSpawnNextWave( int <em>int_1</em> ) | Tells the next wave of enemies to spawn in coop.	Also respawns player. |
| ScriptCoopResetRoundStartTime | void ScriptCoopResetRoundStartTime( ) | Resets the round time and starts the mission. |
| ScriptCoopSetBotQuotaAndRefreshSpawns | void ScriptCoopSetBotQuotaAndRefreshSpawns( int <em>int_1</em> ) | Sets the bot quota considering the # of players connected and refreshes the spawns. |
| ScriptCoopToggleEntityOutlineHighlights | void ScriptCoopToggleEntityOutlineHighlights( bool <em>bool_1</em> ) | Highlights all dropped weapons for players, or removes all highlights. |

### Premier Mode

| Function | Signature | Description |
| -------- | --------- | ----------- |
| ScriptLobbyMapVetoFinished | void ScriptLobbyMapVetoFinished( string <em>string_1</em>, bool <em>bool_2</em>, bool <em>bool_3</em>, string <em>string_4</em> ) | Switch to the selected map after lobby map veto finished. |

### Sounds

| Function | Signature | Description |
| -------- | --------- | ----------- |
| EmitSoundOn | void EmitSoundOn( string <em>string_1</em>, handle <em>handle_2</em> ) | Play named sound on Entity |
| EmitSoundOnClient | void EmitSoundOnClient( string <em>string_1</em>, handle <em>handle_2</em> ) | Play named sound only on the client for the passed in player |
| StartSoundEvent | void StartSoundEvent( string <em>string_1</em>, handle <em>handle_2</em> ) | Start a sound event |
| StartSoundEventFromPosition | void StartSoundEventFromPosition( string <em>string_1</em>, Vector <em>Vector_2</em> ) | Start a sound event from position |
| StartSoundEventFromPositionReliable | void StartSoundEventFromPositionReliable( string <em>string_1</em>, Vector <em>Vector_2</em> ) | Start a sound event from position with reliable delivery |
| StartSoundEventFromPositionUnreliable | void StartSoundEventFromPositionUnreliable( string <em>string_1</em>, Vector <em>Vector_2</em> ) | Start a sound event from position with optional delivery |
| StartSoundEventReliable | void StartSoundEventReliable( string <em>string_1</em>, handle <em>handle_2</em> ) | Start a sound event with reliable delivery |
| StartSoundEventUnreliable | void StartSoundEventUnreliable( string <em>string_1</em>, handle <em>handle_2</em> ) | Start a sound event with optional delivery |
| StopSoundEvent | void StopSoundEvent( string <em>string_1</em>, handle <em>handle_2</em> ) | Stops a sound event with optional delivery |
| StopSoundOn | void StopSoundOn( string <em>string_1</em>, handle <em>handle_2</em> ) | Stop named sound on Entity |

### Utilities
| Function | Signature | Description |
| -------- | --------- | ----------- |
| DeepPrint | void DeepPrint( <em>debugInstance</em>, <em>prefix</em> ) | Print out a class/array/instance/table to the console |
| DeepString | void DeepString( <em>debugInstance</em>, <em>prefix</em> ) | Print out a class/array/instance/table to a string |
| DeepPrintTable | void DeepPrintTable( <em>debugInstance</em>, string <em>prefix</em>, <em>isPublicScriptScope</em> ) | Print out a table (and subtables) to the console |
| Deg2Rad | float Deg2Rad( float <em>deg</em> ) | |
| Rad2Deg | float Rad2Deg( float <em>rad</em> ) | |
| Clamp | Clamp( <em>val</em>, <em>min</em>, <em>max</em> ) | |
| Lerp | Lerp( <em>t</em>, <em>a</em>, <em>b</em> ) | |
| VectorDistanceSq | VectorDistanceSq( Vector <em>v1</em>, Vector <em>v2</em> ) | |
| VectorDistance | VectorDistance( Vector <em>v1</em>, Vector <em>v2</em> ) | |
| VectorLerp | VectorLerp( Vector <em>t</em>, Vector <em>a</em>, Vector <em>b</em> ) | |
| VectorIsZero | VectorIsZero( Vector <em>v</em> ) | |
| RemapVal | RemapVal( <em>v</em>, <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em> ) | Remap a value in the range [a,b] to [c,d]. |
| RemapValClamped | RemapValClamped( <em>v</em>, <em>a</em>, <em>b</em>, <em>c</em>, <em>d</em> ) | Remap a value in the range [a,b] to [c,d]. |
| min | min( <em>x</em>, <em>y</em> ) | |
| max | max( <em>x</em>, <em>y</em> ) | |
| abs | abs( <em>val</em> ) | |
| Merge | Merge( <em>table1</em>, <em>table2</em> ) | |

### Other

| Function | Signature | Description |
| -------- | --------- | ----------- |
| AngleDiff | float AngleDiff( float <em>float_1</em>, float <em>float_2</em> ) | Returns the number of degrees difference between two yaw angles |
| AnglesToVector | Vector AnglesToVector( QAngle <em>QAngle_1</em> ) | Generate a vector given a QAngles |
| AppendToLogFile | void AppendToLogFile( string <em>string_1</em>, string <em>string_2</em> ) | AppendToLogFile is deprecated. Print to the console for logging instead. |
| AxisAngleToQuaternion | Quaternion AxisAngleToQuaternion( Vector <em>Vector_1</em>, float <em>float_2</em> ) | Constructs a quaternion representing a rotation by angle around the specified vector axis |
| CalcClosestPointOnEntityOBB | Vector CalcClosestPointOnEntityOBB( handle <em>handle_1</em>, Vector <em>Vector_2</em> ) | Compute the closest point on the OBB of an entity. |
| CalcDistanceBetweenEntityOBB | float CalcDistanceBetweenEntityOBB( handle <em>handle_1</em>, handle <em>handle_2</em> ) | Compute the distance between two entity OBB. A negative return value indicates an input error. A return value of zero indicates that the OBBs are overlapping. |
| CalcDistanceToLineSegment2D | float CalcDistanceToLineSegment2D( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, Vector <em>Vector_3</em> ) |     |
| CancelEntityIOEvents | void CancelEntityIOEvents( ehandle <em>ehandle_1</em> ) | Create all I/O events for a particular entity |
| CreateDamageInfo | handle CreateDamageInfo( handle <em>handle_1</em>, handle <em>handle_2</em>, Vector <em>Vector_3</em>, Vector <em>Vector_4</em>, float <em>float_5</em>, int <em>int_6</em> ) | (hInflictor, hAttacker, flDamage) - Allocate a damageinfo object, used as an argument to TakeDamage(). Call DestroyDamageInfo( hInfo ) to free the object. |
| CreateEffect | bool CreateEffect( handle <em>handle_1</em> ) | Pass table - Inputs: entity, effect |
| CreateSceneEntity | handle CreateSceneEntity( string <em>string_1</em> ) | Create a scene entity to play the specified scene. |
| CreateTrigger | handle CreateTrigger( Vector <em>origin</em>, Vector <em>vecMin</em>, Vector <em>vecMax</em> ) | Creates and returns an AABB trigger |
| CreateTriggerRadiusApproximate | handle CreateTriggerRadiusApproximate( Vector <em>vecOrigin</em>, float <em>flRadius</em> ) | Creates and returns an AABB trigger thats bigger than the radius provided |
| CreateUniformRandomStream | handle CreateUniformRandomStream( int <em>iSeed</em> ) | Creates a separate random number stream. |
| CrossVectors | Vector CrossVectors( Vector <em>Vector_1</em>, Vector <em>Vector_2</em> ) | Cross product between two vectors |
| DestroyDamageInfo | void DestroyDamageInfo( handle <em>handle_1</em> ) | Free a damageinfo object that was created with CreateDamageInfo(). |
| DoEntFire | void DoEntFire( string <em>string_1</em>, string <em>string_2</em>, string <em>string_3</em>, float <em>float_4</em>, handle <em>handle_5</em>, handle <em>handle_6</em> ) | #EntFire:Generate and entity i/o event |
| DoEntFireByInstanceHandle | void DoEntFireByInstanceHandle( handle <em>handle_1</em>, string <em>string_2</em>, string <em>string_3</em>, float <em>float_4</em>, handle <em>handle_5</em>, handle <em>handle_6</em> ) | #EntFireByHandle:Generate and entity i/o event |
| DoIncludeScript | bool DoIncludeScript( string <em>string_1</em>, handle <em>handle_2</em> ) | Execute a script (internal) |
| DoUniqueString | string DoUniqueString( string <em>string_1</em> ) | #UniqueString:Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table. |
| EntIndexToHScript | handle EntIndexToHScript( int <em>int_1</em> ) | Turn an entity index integer to an HScript representing that entity's script instance. |
| ExponentialDecay | float ExponentialDecay( float <em>float_1</em>, float <em>float_2</em>, float <em>float_3</em> ) | Smooth curve decreasing slower as it approaches zero |
| FireEntityIOInputNameOnly | void FireEntityIOInputNameOnly( ehandle <em>ehandle_1</em>, string <em>string_2</em> ) | Fire Entity's Action Input w/no data |
| FireEntityIOInputString | void FireEntityIOInputString( ehandle <em>ehandle_1</em>, string <em>string_2</em>, string <em>string_3</em> ) | Fire Entity's Action Input with passed String - you own the memory |
| FireEntityIOInputVec | void FireEntityIOInputVec( ehandle <em>ehandle_1</em>, string <em>string_2</em>, Vector <em>Vector_3</em> ) | Fire Entity's Action Input with passed Vector - you own the memory |
| FireGameEvent | void FireGameEvent( string <em>string_1</em>, handle <em>handle_2</em> ) | Fire a game event. |
| FireGameEventLocal | void FireGameEventLocal( string <em>string_1</em>, handle <em>handle_2</em> ) | Fire a game event without broadcasting to the client. |
| FrameTime | float FrameTime( ) | Get the time spent on the server in the last frame |
| GetActiveSpawnGroupHandle | int GetActiveSpawnGroupHandle( ) | Returns the currently active spawn group handle |
| GetFrameCount | int GetFrameCount( ) | Returns the engines current frame count |
| GetListenServerHost | handle GetListenServerHost( ) | Get the local player on a listen server. |
| GetMapName | string GetMapName( ) | Get the name of the map. |
| GetMaxOutputDelay | float GetMaxOutputDelay( ehandle <em>ehandle_1</em>, string <em>string_2</em> ) | Get the longest delay for all events attached to an output |
| GetPhysAngularVelocity | Vector GetPhysAngularVelocity( handle <em>handle_1</em> ) | Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis of rotation, multiplied by the degrees of rotation per second. |
| GetPhysVelocity | Vector GetPhysVelocity( handle <em>handle_1</em> ) | Get Velocity for VPHYS or normal object |
| InitLogFile | void InitLogFile( string <em>string_1</em>, string <em>string_2</em> ) | InitLogFile is deprecated. Print to the console for logging instead. |
| IsClient | bool IsClient( ) | Returns true if this is lua running from the client.dll. |
| IsDedicatedServer | bool IsDedicatedServer( ) | Returns true if this server is a dedicated server. |
| IsInToolsMode | bool IsInToolsMode( ) | Returns true if this is lua running within tools mode. |
| IsMarkedForDeletion | bool IsMarkedForDeletion( handle <em>handle_1</em> ) | Returns true if the entity is valid and marked for deletion. |
| IsServer | bool IsServer( ) | Returns true if this is lua running from the server.dll. |
| IsValidEntity | bool IsValidEntity( handle <em>handle_1</em> ) | Checks to see if the given hScript is a valid entity |
| LerpVectors | Vector LerpVectors( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | lerp between two vectors by a float factor returning new vector |
| ListenToGameEvent | int ListenToGameEvent( string <em>string_1</em>, handle <em>handle_2</em>, handle <em>handle_3</em> ) | Register as a listener for a game event from script. |
| LoadKeyValues | table LoadKeyValues( string <em>string_1</em> ) | Creates a table from the specified keyvalues text file |
| LoadKeyValuesFromString | table LoadKeyValuesFromString( string <em>string_1</em> ) | Creates a table from the specified keyvalues string |
| LocalTime | table LocalTime( ) | Get the current local time |
| MakeStringToken | int MakeStringToken( string <em>string_1</em> ) | Checks to see if the given hScript is a valid entity |
| ManuallyTriggerSpawnGroupCompletion | void ManuallyTriggerSpawnGroupCompletion( int <em>int_1</em> ) | Triggers the creation of entities in a manually-completed spawn group |
| Plat_FloatTime | float Plat_FloatTime( ) | Get the current float time from the engine |
| PlayerInstanceFromIndex | handle PlayerInstanceFromIndex( int <em>int_1</em> ) | Get a script instance of a player by index. |
| PrecacheEntityFromTable | void PrecacheEntityFromTable( string <em>string_1</em>, handle <em>handle_2</em>, handle <em>handle_3</em> ) | Precache an entity from KeyValues in table |
| PrecacheEntityListFromTable | void PrecacheEntityListFromTable( handle <em>handle_1</em>, handle <em>handle_2</em> ) | Precache a list of entity KeyValues tables |
| PrecacheResource | void PrecacheResource( string <em>modelName</em>, handle <em>context</em> ) | Manually precache a single model |
| QSlerp | QAngle QSlerp( QAngle <em>fromAngle</em>, QAngle <em>toAngle</em>, float <em>time</em> ) | Spherical lerp of angle from->to based on time |
| RandomFloat | float RandomFloat( float <em>float_1</em>, float <em>float_2</em> ) | Get a random float within a range |
| RandomInt | int RandomInt( int <em>int_1</em>, int <em>int_2</em> ) | Get a random int within a range |
| RegisterSpawnGroupFilterProxy | void RegisterSpawnGroupFilterProxy( string <em>string_1</em> ) | Create a C proxy for a script-based spawn group filter |
| ReloadMOTD | void ReloadMOTD( ) | Reloads the MotD file |
| RemoveSpawnGroupFilterProxy | void RemoveSpawnGroupFilterProxy( string <em>string_1</em> ) | Remove the C proxy for a script-based spawn group filter |
| RotateOrientation | QAngle RotateOrientation( QAngle <em>QAngle_1</em>, QAngle <em>QAngle_2</em> ) | Rotate a QAngle by another QAngle. |
| RotatePosition | Vector RotatePosition( Vector <em>Vector_1</em>, QAngle <em>QAngle_2</em>, Vector <em>Vector_3</em> ) | Rotate a Vector around a point. |
| RotateQuaternionByAxisAngle | Quaternion RotateQuaternionByAxisAngle( Quaternion <em>Quaternion_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Rotates a quaternion by the specified angle around the specified vector axis |
| RotationDelta | QAngle RotationDelta( QAngle <em>QAngle_1</em>, QAngle <em>QAngle_2</em> ) | Find the delta between two QAngles. |
| RotationDeltaAsAngularVelocity | Vector RotationDeltaAsAngularVelocity( QAngle <em>QAngle_1</em>, QAngle <em>QAngle_2</em> ) | Converts delta QAngle to an angular velocity Vector |
| ScreenShake | void ScreenShake( Vector <em>vecCenter</em>, float <em>flAmplitude</em>, float <em>flFrequency</em>, float <em>flDuration</em>, float <em>flRadius</em>, int <em>eCommand</em>, bool <em>bAirShake</em> ) | Start a screenshake. eCommand values: SHAKE_START = 0, SHAKE_STOP = 1 |
| ScriptGetGameMode | int ScriptGetGameMode( ) | Gets the current game mode. |
| ScriptGetGameType | int ScriptGetGameType( ) | Gets the current game type. |
| ScriptGetRoundsPlayed | int ScriptGetRoundsPlayed( ) | Get the number of rounds played so far. |
| ScriptIsLocalPlayerUsingController | bool ScriptIsLocalPlayerUsingController( ) | Returns whether the player is playing with a controller or not. |
| ScriptIsWarmupPeriod | bool ScriptIsWarmupPeriod( ) | Is it warmup or not. |
| SendToConsole | void SendToConsole( string <em>string_1</em> ) | Send a string to the console as a client command |
| SendToServerConsole | void SendToServerConsole( string <em>string_1</em> ) | Send a string to the console as a server command |
| SetOpvarFloatAll | void SetOpvarFloatAll( string <em>string_1</em>, string <em>string_2</em>, string <em>string_3</em>, float <em>float_4</em> ) | Sets an opvar value for all players |
| SetOpvarFloatPlayer | void SetOpvarFloatPlayer( string <em>string_1</em>, string <em>string_2</em>, string <em>string_3</em>, float <em>float_4</em>, handle <em>handle_5</em> ) | Sets an opvar value for a single player |
| SetPhysAngularVelocity | void SetPhysAngularVelocity( handle <em>handle_1</em>, Vector <em>Vector_2</em> ) | Set Angular Velocity for VPHYS or normal object, from a vector of the axis of rotation, multiplied by the degrees of rotation per second. |
| SetQuestName | void SetQuestName( string <em>string_1</em> ) | Set the current quest name. |
| SetQuestPhase | void SetQuestPhase( int <em>int_1</em> ) | Set the current quest phase. |
| SetRenderingEnabled | void SetRenderingEnabled( ehandle <em>ehandle_1</em>, bool <em>bool_2</em> ) | Set rendering on/off for an ehandle |
| SpawnEntityFromTableAsynchronous | void SpawnEntityFromTableAsynchronous( string <em>string_1</em>, handle <em>handle_2</em>, handle <em>handle_3</em>, handle <em>handle_4</em> ) | Asynchronously spawns a single entity from a table |
| SpawnEntityFromTableSynchronous | handle SpawnEntityFromTableSynchronous( string <em>string_1</em>, handle <em>handle_2</em> ) | Synchronously spawns a single entity from a table |
| SpawnEntityGroupFromTable | bool SpawnEntityGroupFromTable( handle <em>handle_1</em>, bool <em>bool_2</em>, handle <em>handle_3</em> ) | Hierarchically spawn an entity group from a set of spawn tables. |
| SpawnEntityListFromTableAsynchronous | int SpawnEntityListFromTableAsynchronous( handle <em>handle_1</em>, handle <em>handle_2</em> ) | Asynchronously spawn an entity group from a list of spawn tables. A callback will be triggered when the spawning is complete |
| SpawnEntityListFromTableSynchronous | handle SpawnEntityListFromTableSynchronous( handle <em>handle_1</em> ) | Synchronously spawn an entity group from a list of spawn tables. |
| SplineQuaternions | Quaternion SplineQuaternions( Quaternion <em>Quaternion_1</em>, Quaternion <em>Quaternion_2</em>, float <em>float_3</em> ) | Very basic interpolation of v0 to v1 over t on [0,1] |
| SplineVectors | Vector SplineVectors( Vector <em>Vector_1</em>, Vector <em>Vector_2</em>, float <em>float_3</em> ) | Very basic interpolation of v0 to v1 over t on [0,1] |
| StopEffect | void StopEffect( handle <em>handle_1</em>, string <em>string_2</em> ) | Pass entity and effect name |
| StopListeningToAllGameEvents | void StopListeningToAllGameEvents( handle <em>handle_1</em> ) | Stop listening to all game events within a specific context. |
| StopListeningToGameEvent | bool StopListeningToGameEvent( int <em>int_1</em> ) | Stop listening to a particular game event. |
| Time | float Time( ) | Get the current server time |
| TraceCollideable | bool TraceCollideable( handle <em>handle_1</em> ) | Pass table - Inputs: start, end, ent, (optional mins, maxs) -- outputs: pos, fraction, hit, startsolid, normal |
| TraceHull | bool TraceHull( handle <em>handle_1</em> ) | Pass table - Inputs: start, end, min, max, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid |
| TraceLine | bool TraceLine( handle <em>handle_1</em> ) | Pass table - Inputs: startpos, endpos, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid |
| UTIL_Remove | void UTIL_Remove( handle <em>handle_1</em> ) | Removes the specified entity |
| UTIL_RemoveImmediate | void UTIL_RemoveImmediate( handle <em>handle_1</em> ) | Immediately removes the specified entity |
| UnloadSpawnGroup | void UnloadSpawnGroup( string <em>string_1</em> ) | Unload a spawn group by name |
| UnloadSpawnGroupByHandle | void UnloadSpawnGroupByHandle( int <em>int_1</em> ) | Unload a spawn group by handle |
| UserIDToControllerHScript | handle UserIDToControllerHScript( int <em>userid</em> ) | Turn a userid integer (typically, fields named 'userid' in game events) to an HScript representing the associated player controller's script instance. |
| VectorToAngles | QAngle VectorToAngles( Vector <em>Vector_1</em> ) | Get Qangles (with no roll) for a Vector. |
| cvar_getf | float cvar_getf( string <em>string_1</em> ) | Gets the value of the given cvar, as a float. |
| cvar_setf | bool cvar_setf( string <em>string_1</em>, float <em>float_2</em> ) | Sets the value of the given cvar, as a float. |
