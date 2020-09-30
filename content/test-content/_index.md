---
title: "Docs Index"
description: "index of the docs section"
date: 2020-01-07T14:59:38+01:00
toc: true
---

This is index content


{{< row cols="2" >}}
  {{ col }}
    ## Markdownify this! 

    Column 1
  {{ /col }}
  
  {{ col }}
    **Markdownify this!!** 

    Column 2
  {{ /col }}
{{< /row >}}

{{< row cols="3" >}}
    {{ col }}
    ## Markdownify this! 

    Column 1
  {{ /col }}
  
  {{ col }}
    **Markdownify this!!** 

    Column 2
  {{ /col }}
    {{ col }}
    **Markdownify this!!** 

    Column 3
  {{ /col }}
{{< /row >}}

{{< row col-classes="col col-md-3">}}
  {{ col class="bg-light" }}
    ## Markdownify this! 

    Column 1
  {{ /col }}
  
  {{ col class="text-primary" }}
    **Markdownify this!!** 

    Column 2
  {{ /col }}
  {{ col class="border bg-light" }}
    **Markdownify this!!** 

    Column 3
  {{ /col }}
    {{ col class="regular-shadow" }}
    **Markdownify this!!** 

    Column 4
  {{ /col }}
{{< /row >}}
