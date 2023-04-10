import React from 'react';
import {Node, TreeNodeProps} from '../../interface/Node';
/*
interface Props {
    node: {
        name:string,
        children?: Node[];
    }
  }
*/


//const BasePage = (props:{children: any}) =>{  
//const TreeNode = ({ node }) => {
const TreeNode = (TreeNodeProps:{ node:Node }) => {    
  const hasChildren = TreeNodeProps.node.children && TreeNodeProps.node.children.length > 0;
  
  return (
    <li>
      {TreeNodeProps.node.name}
      {hasChildren && (
        <ul>
            
          {TreeNodeProps.node.children?.map((childNode, index) => (
            <TreeNode key={index} node={childNode} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode;
/*
const BasePage = (props:{children: any}) =>{
    return(
        <div className={`BasePage_test ${style.BasePage}`} id="BasePage_id" > 1 {props.children}</div>
    )
}

*/