/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Case,
  CaseHead,
  CaseSummary,
  Heading,
  Summary,
  UseCases,
} from "./style";
import { useCase } from "./usecase";

export default function about() {
  return (
    <div>
      <Heading>About Dnotebook</Heading>
      <Summary>
        Danfo Notebook (Dnotebook) is an open-source project, born out of the
        need to perform quick and interactive experimentation/prototyping with{" "}
        <a href="https://danfo.jsdata.org/" target="_blank ">
          Danfo.js
        </a>
        . DNotebook is a similar to the popular{" "}
        <a href="https://jupyter.org/" target="_blank ">
          Jupyter Notebook
        </a>{" "}
        but is customized for the JavaScript environment. Dnotebook is part of
        our grand vision at{" "}
        <a href="https://github.com/opensource9ja" target="_blank ">
          JSdata
        </a>{" "}
        to bring more Data Science and Machine Learning tools to the JavaScript
        ecosystem.
      </Summary>
      <div style={{ marginTop: "50px" }}>
        <Heading>What can it be used for?</Heading>
        <Summary>
          DNotebook allows you to create and share pages that contain live code,
          text and visualizations in textbook-like manner.
        </Summary>
        <UseCases>
          {useCase.map((i) => (
            <Case key={i.title}>
              <CaseHead>{i.title}</CaseHead>
              <CaseSummary>{i.summary}</CaseSummary>
            </Case>
          ))}
        </UseCases>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Heading>Creators and Core Maintainers</Heading>
        <Summary>
          Dnotebooks was created by{" "}
          <a href="https://github.com/risenW" target="_blank" rel="noreferrer">
            Rising Odegua
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/steveoni/"
            target="_blank"
            rel="noreferrer"
          >
            Stephen Oni
          </a>{" "}
          . It is actively maintained by them as well. If you're looking to
          contribute to making it better, you can raise issues here. Dnotebook
          is hosted on GitHub.
        </Summary>
      </div>
    </div>
  );
}
