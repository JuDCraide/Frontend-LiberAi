import React from "react";
import Button from "../../components/Button";
import Tag, { TagInactive, TagDone } from "../../components/Tag";
import {
  Text22Bold,
  Text20Bold,
  Text20SemiBold,
  Text20Regular,
  Text18Bold,
  Text18SemiBold,
  Text18Regular,
  Text16Bold,
  Text16Regular,
  Text14Regular,
  Text12Bold,
  Text12SemiBold,
  Text12Regular,
  Text18RegularInactive,
  Text16RegularInactive,
  Text14RegularInactive,
  Text12BoldInactive,
  Text12SemiBoldInactive,
  Text12RegularInactive,
} from "../../components/Text";

import HorizontalContainer from "../../components/HorizontalContainer";
import Quizz from "../../components/Quizz";
import SpotlightVideo from "../../components/SpotlightVideo";
import Divider from "../../components/Divider";

function TestComponents() {
  return (
    <div>
      <h1>Hello Liberaí</h1>
      <Button color="var(--pink-color)">Click me</Button>
      <Tag>+ 354</Tag>
      <TagInactive>+ 354</TagInactive>
      <TagDone>+ 354</TagDone>
      <Text22Bold>Teste</Text22Bold>
      <Text20Bold>Teste</Text20Bold>
      <Text20SemiBold>Teste</Text20SemiBold>
      <Text20Regular>Teste</Text20Regular>
      <Text18Bold>Teste</Text18Bold>
      <Text18SemiBold>Teste</Text18SemiBold>
      <Text18Regular>Teste</Text18Regular>
      <Text16Bold>Teste</Text16Bold>
      <Text16Regular>Teste</Text16Regular>
      <Text14Regular>Teste</Text14Regular>
      <Text12Bold>Teste</Text12Bold>
      <Text12SemiBold>Teste</Text12SemiBold>
      <Text12Regular>Teste</Text12Regular>
      <Divider />
      <Text18RegularInactive>Teste</Text18RegularInactive>
      <Text16RegularInactive>Teste</Text16RegularInactive>
      <Text14RegularInactive>Teste</Text14RegularInactive>
      <Text12BoldInactive>Teste</Text12BoldInactive>
      <Text12SemiBoldInactive>Teste</Text12SemiBoldInactive>
      <Text12RegularInactive>Teste</Text12RegularInactive>
      <div>
        <HorizontalContainer mainTitle="Nossos Cursos" />
        <div>
          <Quizz />
          <SpotlightVideo
            title="Como economizar em momentos de crise"
            autor="Com Thais Andrade"
          />
        </div>
      </div>
    </div>
  );
}

export default TestComponents;
