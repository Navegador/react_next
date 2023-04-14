import React from "react";

export interface Node {
    name: string,
    children?: Node[];
}

export interface Nodeqqq {
    children: Node[];
}

export interface TreeNodeProps_OLD {
    node: Node;
}

export interface TreeNodeProps {
    node?: Node[];
}
