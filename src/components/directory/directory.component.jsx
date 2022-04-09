import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

const DirectoryMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
`

const Directory = ({sections}) => {
  return(
    <DirectoryMenuContainer>
      {sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))
      }
    </DirectoryMenuContainer>
  )
}



const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);