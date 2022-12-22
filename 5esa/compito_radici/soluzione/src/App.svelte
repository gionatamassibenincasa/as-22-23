<script>
  let r0_erone, r1_erone, r0_dicotomico, r1_dicotomico;
  let a0, b0, a1, b1;
  let soluzione1a = [],
    soluzione1b = [],
    soluzione2a = [],
    soluzione2b = [];
  let risolviErone = function (radicando, iterazioni) {
    let k = 0,
      x = 1,
      ek = 0,
      xm1 = 1;
    let soluzione = [];
    soluzione.push({
      k,
      x,
      ek,
    });
    while (k < iterazioni) {
      k = k + 1;
      x = (x + radicando / x) / 2;
      ek = Math.abs(x - xm1);
      xm1 = x;
      soluzione.push({
        k,
        x,
        ek,
      });
    }
    return soluzione;
  };

  let risolviDicotomico = function (radicando, a, b, iterazioni) {
    a = parseFloat(a);
    b = parseFloat(b);
    let k = 0,
      x = (a + b) / 2,
      ek = b - a,
      segno = Math.sign(x * x - radicando);
    console.log("Segno(" + (x * x - radicando) + ") = " + segno);
    let soluzione = [];
    soluzione.push({
      k,
      a,
      b,
      x,
      segno,
      ek,
    });
    while (k < iterazioni) {
      k = k + 1;
      if (x * x < radicando) a = x;
      else b = x;
      ek = b - a;
      x = (a + b) / 2;
      segno = Math.sign(x * x - radicando);
      soluzione.push({
        k,
        a,
        b,
        x,
        segno,
        ek,
      });
    }
    return soluzione;
  };
</script>

<main>
  <h1>Soluzione compito</h1>

  <h2>Questito 1</h2>

  <h3>a)</h3>

  <p>
    x = √
    <input
      bind:value="{r0_erone}"
      type="number"
      min="0"
      step="1"
      on:change="{() => {
        soluzione1a = risolviErone(r0_erone, 4);
      }}"
    />
  </p>

  <table>
    <thead>
      <tr>
        <th>k</th>
        <th>x<sub>k</sub></th>
        <th>|x<sub>k</sub> - x<sub>k-1</sub>|</th>
      </tr>
    </thead>
    <tbody>
      {#each soluzione1a as riga, i}
        <tr>
          <td>{riga.k}</td>
          <td>{riga.x.toPrecision(5)}</td>
          <td
            >{#if i == 0}<center>&mdash;</center>{:else}{riga.ek.toPrecision(
                5
              )}{/if}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>

  <h3>b)</h3>

  <p>
    x = √
    <input
      bind:value="{r1_erone}"
      type="number"
      min="0"
      step="1"
      on:change="{() => {
        soluzione1b = risolviErone(r1_erone, 4);
      }}"
    />
  </p>

  <table>
    <thead>
      <tr>
        <th>k</th>
        <th>x<sub>k</sub></th>
        <th>|x<sub>k</sub> - x<sub>k-1</sub>|</th>
      </tr>
    </thead>
    <tbody>
      {#each soluzione1b as riga, i}
        <tr>
          <td>{riga.k}</td>
          <td>{riga.x.toPrecision(5)}</td>
          <td
            >{#if i == 0}<center>&mdash;</center>{:else}{riga.ek.toPrecision(
                5
              )}{/if}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>

  <h2>Questito 2</h2>

  <h3>a)</h3>

  <p>
    a =
    <input bind:value="{a0}" type="number" min="0" step="1" />

    b =
    <input bind:value="{b0}" type="number" min="0" step="1" />

    x = √
    <input
      bind:value="{r0_dicotomico}"
      type="number"
      min="0"
      step="1"
      on:change="{() => {
        soluzione2a = risolviDicotomico(r0_dicotomico, a0, b0, 4);
      }}"
    />
  </p>

  <table>
    <thead>
      <tr>
        <th>k</th>
        <th>a<sub>k</sub></th>
        <th>b<sub>k</sub></th>
        <th>x<sub>k</sub></th>
        <th>sign(x<sub>k</sub> - r)</th>
        <th>|b<sub>k</sub> - a<sub>k</sub>|</th>
      </tr>
    </thead>
    <tbody>
      {#each soluzione2a as riga}
        <tr>
          <td>{riga.k}</td>
          <td>{riga.a.toPrecision(5)}</td>
          <td>{riga.b.toPrecision(5)}</td>
          <td>{riga.x.toPrecision(5)}</td>
          <td>{riga.segno}</td>
          <td>{riga.ek.toPrecision(5)}</td>
        </tr>
      {/each}
    </tbody>
  </table>

  <h3>b)</h3>

  <p>
    a =
    <input bind:value="{a1}" type="number" min="0" step="1" />

    b =
    <input bind:value="{b1}" type="number" min="0" step="1" />

    x = √
    <input
      bind:value="{r1_dicotomico}"
      type="number"
      min="0"
      step="1"
      on:change="{() => {
        soluzione2b = risolviDicotomico(r1_dicotomico, a1, b1, 4);
      }}"
    />
  </p>

  <table>
    <thead>
      <tr>
        <th>k</th>
        <th>a<sub>k</sub></th>
        <th>b<sub>k</sub></th>
        <th>x<sub>k</sub></th>
        <th>sign(x<sub>k</sub> - r)</th>
        <th>|b<sub>k</sub> - a<sub>k</sub>|</th>
      </tr>
    </thead>
    <tbody>
      {#each soluzione2b as riga}
        <tr>
          <td>{riga.k}</td>
          <td>{riga.a.toPrecision(5)}</td>
          <td>{riga.b.toPrecision(5)}</td>
          <td>{riga.x.toPrecision(5)}</td>
          <td>{riga.segno}</td>
          <td>{riga.ek.toPrecision(5)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  * {
    background-color: white;
    color: black;
  }
  table {
    margin-left: auto;
    margin-right: auto;
  }

  td {
    text-align: right;
    margin: 3px 15px 3px 15px;
    padding: 3px 5px 3px 5px;
  }
</style>
