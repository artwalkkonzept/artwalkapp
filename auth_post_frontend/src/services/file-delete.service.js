import { Button, Grid } from '@material-ui/core';
import React from 'react';

export interface FileDeleteService {
  file: File;
  onDelete: (file: File) => void;
}

export function  FileDelete({ file, onDelete }: FileDeleteService) {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>{file.name}</Grid>
      <Grid item>
        <Button size="small" onClick={() => onDelete(file)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
