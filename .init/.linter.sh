#!/bin/bash
cd /home/kavia/workspace/code-generation/assessment-page-ui-redesign-134163-134172/assessment_ui_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

