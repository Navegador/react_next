import React from "react";

export interface Node {
    name: string,
    children?: Node[];
}

export interface TreeNodeProps {
    node: Node;
}


