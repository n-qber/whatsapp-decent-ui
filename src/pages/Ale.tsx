import React, { useCallback } from 'react';

import { ReactFlow, useNodesState, useEdgesState, addEdge, Background, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { ChatIcon } from '../components/ChatIcon.tsx';
import { Conversation } from '../components/Conversation.tsx';



export default function Ale(){

    const initialNodes = [
        {id: '1', position: {x: 0, y: 0}, data: {onOpenConversation}, type: 'ChatIcon'},
    ]
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

    function onOpenConversation(conversationId: string)
    {

        const conversationNode = {id: '2', position: {x: 200, y: 50}, data: {label: 'asdfasdf', onOpenConversation: () => {}}, type: 'Conversation'};
        setNodes([...nodes, conversationNode]);
        //setEdges(oldEdges => addEdge('1-2', oldEdges));
    }
    
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            nodeTypes={{ChatIcon, Conversation}}
            // onEdgesChange={onEdgesChange}
            // onConnect={onConnect}
        >
            
            <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
        </div>
    );
}